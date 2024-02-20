const { Jobs } = require('./schedules')
const schedule = require('node-schedule')
const { getSchedules, executeSchedule } = require('../services/schedule.service')


async function setupSchedule() {
    const schedules = await getSchedules()
    schedules.forEach(item => {
        const { id, time, device_id, action } = item
        if (time < Date.now()) {
            executeSchedule(id, device_id, action)
        } else {
            const dateTime = new Date(time)
            const job = schedule.scheduleJob(dateTime, () => {
                executeSchedule(id, device_id, action)
            })

            if (job) Jobs[id] = job
        }
    })
}

module.exports = setupSchedule