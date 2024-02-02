const connection = require('../config/database')
const pool = connection.promise()

module.exports = {
    async getListDevice() {
        const sql = `SELECT * FROM devices`
        return (await pool.query(sql))[0]
    },

    async getDeviceById(deviceId) {
        const sql = `SELECT * FROM devices WHERE id = ?`
        return (await pool.query(sql, [deviceId]))[0][0]
    },
    
    async updateDevice(deviceId, state) {
        const sql = `UPDATE devices SET state = ? WHERE id = ?`
        return (await pool.query(sql, [state, deviceId]))[0]
    }
}