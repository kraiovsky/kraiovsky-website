import logger from './logger'

const extendResBody = (res) => {
  const originalResJsonFn = res.json
  const originalResSendFn = res.send
  res.json = (body) => {
    res.body = body
    originalResJsonFn(body)
  }
  res.send = (body) => {
    res.body = body
    originalResSendFn(body)
  }
}

export default async (req, res, handler, loggerMsg) => {
  extendResBody(res)

  try {
    await handler(req, res)
  } catch (error) {
    logger.error(error, loggerMsg)
    res.status(500).end('Internal Server Error')
  }

  logger.info({ req, res }, loggerMsg)
}
