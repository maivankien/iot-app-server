const cron = require('node-cron')
const mqttClient = require('../config/mqtt')
const { isLastDayOfMonth } = require('../helpers/common.helper')

const scheduleJobs = () => {
    // 23:58 every day
    cron.schedule('58 23 * * *', () => {
        const date = new Date()
        mqttClient.publish('home/energy/getDay', JSON.stringify({ date }))

        if (isLastDayOfMonth(date)) {
            mqttClient.publish('home/energy/getMonth', JSON.stringify({ date }))
        }
    })
}

module.exports = { scheduleJobs }