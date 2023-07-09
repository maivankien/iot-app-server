const user = require('./user')

const route = (app) => {
  app.use('/api/user', user)
}

module.exports = route