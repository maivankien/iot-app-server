const mqttClient = require('../config/mqtt')
const { Jobs } = require('../schedule/schedules')
const connection = require('../config/database')
const { getDeviceById, updateDevice } = require('./device.service')
const pool = connection.promise()

async function getScheduleByDeviceId(condition) {
    try {
        const sql =
            `SELECT * FROM schedule_jobs 
            WHERE device_id = ? AND action = ? 
            AND status = 1 AND deleted_at IS NULL 
            ORDER BY ID DESC`

        return (await pool.query(sql, condition))[0]
    } catch (error) {
        console.log(error)
        return null
    }
}

async function getSchedules() {
    try {
        const sql = `SELECT * FROM schedule_jobs WHERE status = 1 AND deleted_at IS NULL`

        return (await pool.query(sql))[0]
    } catch (error) {
        console.log(error)
        return null
    }
}

async function getAllSchedulesByDeviceId(deviceId) {
    try {
        const sql = `SELECT * FROM schedule_jobs WHERE device_id = ? AND status = 1 AND deleted_at IS NULL ORDER BY ID DESC`

        return (await pool.query(sql, [deviceId]))[0]
    } catch (error) {
        console.log(error)
        return null
    }
}

async function countScheduleByDeviceId(condition) {
    try {
        const sql = `SELECT COUNT(*) as count FROM schedule_jobs WHERE device_id = ? AND action = ? AND status = 1 AND deleted_at IS NULL`

        return (await pool.query(sql, condition))[0][0]
    } catch (error) {
        console.log(error)
        return null
    }
}

async function createSchedule(inputs) {
    try {
        const sql = `INSERT INTO schedule_jobs (device_id, action, time) VALUES (?, ?, ?)`

        return (await pool.query(sql, inputs))[0]
    } catch (error) {
        console.log(error)
        return null
    }
}

async function updateSchedule(id, inputs) {
    try {
        let sql = 'UPDATE schedule_jobs SET'

        const keys = Object.keys(inputs)
        const values = Object.values(inputs)

        for (let i = 0; i < keys.length; i++) {
            sql += ` ${keys[i]} = '${values[i]}'`
            if (i !== keys.length - 1) {
                sql += ','
            }
        }
        sql = sql + ` where id = '${id}'`
        return await pool.query(sql)
    } catch (error) {
        console.log(error)
        return null
    }
}

async function deleteSchedule(id) {
    try {
        const sql = `UPDATE schedule_jobs SET deleted_at = NOW() WHERE id = ?`

        return (await pool.query(sql, [id]))[0]
    } catch (error) {
        console.log(error)
        return null
    }
}

async function executeSchedule(id, deviceId, action) {
    const device = await getDeviceById(deviceId)

    delete Jobs[id]
    mqttClient.publish('home/device', JSON.stringify({
        state: action,
        pin: device.pin,
        deviceId: device.id,
    }))
    Promise.all([
        updateDevice(deviceId, action),
        updateSchedule(id, { status: 0 })
    ])
}

module.exports = {
    getSchedules,
    createSchedule,
    updateSchedule,
    deleteSchedule,
    executeSchedule,
    getScheduleByDeviceId,
    countScheduleByDeviceId,
    getAllSchedulesByDeviceId
}