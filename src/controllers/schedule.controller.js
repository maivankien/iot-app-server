const schedule = require('node-schedule');
const { Jobs } = require('../schedule/schedules.js')
const { 
    createSchedule, 
    deleteSchedule, 
    executeSchedule, 
    countScheduleByDeviceId, 
    getAllSchedulesByDeviceId,
} = require('../services/schedule.service.js')

async function createJob(req, res) {
    const { action, time } = req.body
    const { deviceId } = req.params
    const dateTime = new Date(time)

    const count = await countScheduleByDeviceId([deviceId, action])
    if (count.count >= 5) {
        return res.status(400).json({
            message: "Maximum number of schedule reached"
        })
    }

    const result = await createSchedule([deviceId, action, dateTime.getTime()])
    if (!result) {
        return res.status(500).json({
            message: "Internal server error"
        })
    }
    const job = schedule.scheduleJob(dateTime, () => {
        executeSchedule(result.insertId, deviceId, action)
    })

    if (!job) {
        deleteSchedule(result.insertId)
        return res.status(400).json({
            message: "Invalid job"
        })
    }
    Jobs[result.insertId] = job
    return res.status(200).json({
        jobId: result.insertId,
        message: "Success!",
    })
}

async function updateJob(req, res) {
    const { id } = req.params
    const { action, time } = req.body
    Jobs[id].cancel()

    const dateTime = new Date(time)
    const job = schedule.scheduleJob(dateTime, function () { })

    if (!job) {
        return res.status(400).json({
            message: "Invalid job"
        })
    }
}

async function deleteJob(req, res) {
    const { id } = req.params

    if (Jobs["id"] !== undefined) {
        Jobs[id].cancel()
        delete Jobs[id]
    }

    const result = await deleteSchedule(id)
    if (result) {
        return res.status(200).json({
            message: "Success!"
        })
    }
    return res.status(500).json({
        message: "Internal server error"
    })
}

async function getAllJobs(req, res) {
    const { deviceId } = req.params
    const jobs = await getAllSchedulesByDeviceId(deviceId)

    if (jobs) {
        return res.status(200).json(jobs)
    }
    return res.status(500).json({
        message: "Internal server error"
    })
}

module.exports = { createJob, updateJob, deleteJob, getAllJobs }