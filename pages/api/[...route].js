import runMiddleware from '../../utils/middleware'

const handler = (req, res) => {
  const { method } = req

  switch (method) {
    default:
      res.status(404).end('Not Found')
      break
  }
}

export default (req, res) => runMiddleware(req, res, handler, 'route not found')
