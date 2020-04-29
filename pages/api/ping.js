import runMiddleware from '../../utils/middleware'

const handler = (req, res) => {
  const { method } = req

  switch (method) {
    case 'GET': {
      try {
        res.status(200).send('pong')
      } catch (error) {
        throw Error(error)
      }
      break
    }
    default:
      res.status(404).end('Not Found')
      break
  }
}

export default (req, res) => runMiddleware(req, res, handler, 'healthcheck')
