import pino from 'pino'

const serializeHeaders = (rawHeaders = '') => {
  return rawHeaders.split('\r\n').reduce((result, header) => {
    const [key, value] = header.split(':')
    if (key && value) {
      result[key.trim()] = value.trim()
    }
    return result
  }, {})
}

const logger = pino({
  prettyPrint: process.env.NODE_ENV === 'development',
  serializers: {
    req(req) {
      return {
        url: req.url,
        method: req.method,
        query: req.query,
        headers: req.headers,
        cookies: req.cookies,
        body: req.body || {},
      }
    },
    res(res) {
      return {
        statusCode: res.statusCode,
        headers: serializeHeaders(res._header),
        body: res.body,
      }
    },
  },
})

export default logger
