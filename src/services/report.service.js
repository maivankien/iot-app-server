const connection = require('../config/database')
const pool = connection.promise()

module.exports = {
    async getEnergyUsageByMonth(dateStart, dateEnd) {
        const sql = `
            SELECT id, \`date\`, energy_consumed as value
            FROM energy_usage_daily
            WHERE date >= ? and date <= ?`
            
        return (await pool.query(sql, [dateStart, dateEnd]))[0]
    },
    async getEnergyUsageByYear(year) {
        const sql = 
            `SELECT id, \`month\`, energy_consumed as value
            FROM energy_usage_monthly
            WHERE \`year\` = ?
            ORDER BY id ASC`

        return (await pool.query(sql, [year]))[0]
    }
}