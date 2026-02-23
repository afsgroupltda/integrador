import { env } from '@/config/env.js'

export function logger() {
  const isDevelopment = env.NODE_ENV === 'development'

  return isDevelopment
    ? {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            translateTime: 'yyyy-mm-dd HH:MM:ss',
            ignore: 'pid,hostname',
          },
        },
      }
    : false
}
