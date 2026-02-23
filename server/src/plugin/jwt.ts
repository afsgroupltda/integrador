import fp from 'fastify-plugin'
import { FastifyTypedInstance } from '@/@types/fastify.js'
import { env } from '@/config/env.js'
import fastifyJwt from '@fastify/jwt'

async function jwtPlugin(app: FastifyTypedInstance) {
  app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
      cookieName: 'token',
      signed: false,
    },
  })
}

export default fp(jwtPlugin)
