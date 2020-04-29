const defaultConfig = {
  WEBSITE_TITLE: 'JAMStack Starter',
}
const config = {
  development: {
    ...defaultConfig,
    BASE_URL: 'http://localhost:3000',
  },
  production: {
    ...defaultConfig,
    BASE_URL: 'http://',
  },
}
const env = process.env.NODE_ENV || 'development'

module.exports = () => config[env]
