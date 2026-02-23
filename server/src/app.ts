import fastify from 'fastify'
import { logger } from './utils/logger.js'
import swaggerPlugin from './plugin/swagger.js'
import jwtPlugin from './plugin/jwt.js'
import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'
import fastifyCookie from '@fastify/cookie'

import fastifyHelmet from '@fastify/helmet'
import fastifyCors from '@fastify/cors'
import fastifyRateLimit from '@fastify/rate-limit'

const app = fastify({
  logger: logger(),
}).withTypeProvider<ZodTypeProvider>()

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Security
app.register(fastifyHelmet)
app.register(fastifyCors, {
  origin: '*',
})
app.register(fastifyRateLimit, {
  max: 400,
  timeWindow: '1 minute',
})

// Swagger configs
app.register(swaggerPlugin)

// JWT Plugin

app.register(jwtPlugin)
app.register(fastifyCookie)

// Routes

app.get('/', (req, reply) => {
  return reply.status(200).send({
    message: 'Servidor do Integrador Conectado com Sucesso',
  })
})

app.setErrorHandler((error, _request, reply) => {
  if (error instanceof ZodError) {
    return reply.status(400).send({
      message: 'Validation error.',
      issues: error.format(),
    })
  }

  if (error.validation) {
    return reply.status(400).send({
      status: 'fail',
      message: error.message,
      issues: error.validation,
    })
  }

  if (error.statusCode === 429) {
    return reply.status(429).send({
      message: 'You hit the rate limit! Slow down please!',
    })
  }

  console.error(error)

  return reply.status(500).send({
    message: 'Internal server error.',
    error: error.message,
  })
})

export { app }
