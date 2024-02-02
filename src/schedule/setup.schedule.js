const { Jobs } = require('./schedules')
const schedule = require('node-schedule')
const { getSchedules, executeSchedule } = require('../services/schedule.service')


async function setupSchedule() {
    const schedules = await getSchedules()
    schedules.forEach(item => {
        if (item.time < Date.now()) {
            executeSchedule(item.id, item.device_id, item.action)
        } else {
            const dateTime = new Date(item.time)
            const job = schedule.scheduleJob(dateTime, () => {
                executeSchedule(item.id, item.device_id, item.action)
            })

            if (job) Jobs[item.id] = job
        }
    })
}

module.exports = setupSchedule