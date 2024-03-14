const user = require('./user')
const device = require('./device')
const report = require('./report')
const schedule = require('./schedule')
const userMiddleware = require('../middlewares/user.middleware')


const route = (app) => {
  app.use('/api/user', user)
  // app.use('/api/device', userMiddleware.authUser, device)
  // app.use('/api/report', userMiddleware.authUser, report)
  // app.use('/api/schedule', userMiddleware.authUser, schedule)
  app.use('/api/report', report)
  app.use('/api/device', device)
  app.use('/api/schedule', schedule)
}

module.exports = route