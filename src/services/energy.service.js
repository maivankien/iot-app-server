const connection = require('../config/database')
const { areDatesInSameMonth } = require('../helpers/common.helper')
const pool = connection.promise()

exports.saveEnergyDay = async (input) => {
    try {
        const sqlCheck = "SELECT * FROM energy_usage_daily order by `date` desc limit 1"
        const [rows] = await pool.query(sqlCheck)

        if (rows.length > 0 && areDatesInSameMonth(date, rows[0].date)) {
            newEnergy = input.energy * 1000 - rows[0].energy_consumed
        } else {
            newEnergy = input.energy * 1000
        }

        const sql = "INSERT INTO energy_usage_daily SET energy_consumed = ?, `date` = ?"
        const formatDate = new Date(input.date).toISOString().split('T')[0]
        await pool.query(sql, [newEnergy, formatDate])
    }
    catch (error) {
        console.log('SaveEnergyDayError: ', error)
    }
}

exports.saveEnergyMonth = async (input) => {
    try {
        const sql = "INSERT INTO energy_usage_monthly SET energy_consumed = ?, `month` = ?, `year` = ?"
        const month = new Date(input.date).getMonth() + 1
        const year = new Date(input.date).getFullYear()

        await pool.query(sql, [input.energy * 1000, month, year])
    }
    catch (error) {
        console.log('SaveEnergyMonthError: ', error)
    }
}