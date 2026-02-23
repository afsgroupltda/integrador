import { app } from './app'
import { env } from './config/env'

async function start() {
  try {
    await app.listen({ port: env.PORT, host: env.HOST })

    console.log(`Server is Running at http://${env.HOST}:${env.PORT}`)
  } catch (err) {
    app.log.error(err)
    console.log('Fechando o Servidor')
    process.exit(1)
  }
}

start()
