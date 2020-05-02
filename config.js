const defaultConfig = {
  WEBSITE_TITLE: 'Roman Kraiovsky',
}
const config = {
  development: {
    ...defaultConfig,
    BASE_URL: 'http://localhost:3000',
  },
  production: {
    ...defaultConfig,
    BASE_URL: process.env.BASE_URL,
  },
}
const env = process.env.NODE_ENV || 'development'

module.exports = () => config[env]
