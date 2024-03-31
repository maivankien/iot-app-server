const connection = require('../config/database')
const { areDatesInSameMonth } = require('../helpers/common.helper')
const pool = connection.promise()

const KWH_TO_WH = 1000

exports.saveEnergyDay = async (input) => {
    try {
        let newEnergy = 0
        const inputDate = input.date
        const inputEnergy = input.energy * KWH_TO_WH

        const sqlCheck = "SELECT * FROM energy_usage_daily order by `date` desc limit 1"
        const [rows] = await pool.query(sqlCheck)

        if (rows.length > 0) {
            const old = rows[0]
            if (areDatesInSameMonth(inputDate, old.date) && inputEnergy > old.energy_consumed) {
                newEnergy = inputEnergy - old.energy_consumed
            } else {
                newEnergy = inputEnergy
            }
        } else {
            newEnergy = inputEnergy
        }

        const sql = "INSERT INTO energy_usage_daily SET energy_consumed = ?, `date` = ?"
        const formatDate = new Date(inputDate).toISOString().split('T')[0]
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

        await pool.query(sql, [input.energy * KWH_TO_WH, month, year])
    }
    catch (error) {
        console.log('SaveEnergyMonthError: ', error)
    }
}