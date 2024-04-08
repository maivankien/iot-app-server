const connection = require('../config/database')
const pool = connection.promise()

module.exports = {
    async saveElectricityUsagePerSecond(inputs) {
        try {
            const sql =
                `INSERT INTO electricity_usage_per_second 
                (id, voltage, current, power, frequency, pf) 
                VALUES (?, ?, ?, ?, ?, ?)`

            const values = [
                Math.floor(Date.now() / 1000),
                inputs.voltage,
                inputs.current,
                inputs.power,
                inputs.frequency,
                inputs.pf
            ]
            return (await pool.query(sql, values))[0]
        } catch (error) {
            console.log(error)
        }
    }
}