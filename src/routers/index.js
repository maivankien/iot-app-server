const user = require('./user')
const device = require('./device')
const report = require('./report')
const userMiddleware = require('../middlewares/user.middleware')


const route = (app) => {
  app.use('/api/user', user)
  app.use('/api/device', userMiddleware.authUser, device)
  app.use('/api/report', userMiddleware.authUser, report)
}

module.exports = route