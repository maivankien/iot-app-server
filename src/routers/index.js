const user = require('./user')
const device = require('./device')
const userMiddleware = require('../middlewares/user.middleware')


const route = (app) => {
  app.use('/api/user', user)
  app.use('/api/device', userMiddleware.authUser, device)
}

module.exports = route