const reportService = require('../services/report.service')

module.exports = {
    async getEnergyUsageByMonth(req, res) {
        const { dateStart, dateEnd } = req.query

        if (!dateStart || !dateEnd) {
            return res.status(400).json({
                message: "Invalid date range"
            })
        }

        return res.status(200).json(await reportService.getEnergyUsageByMonth(dateStart, dateEnd))
    },

    async getEnergyUsageByYear(req, res) {
        const { year } = req.query

        if (!year) {
            return res.status(400).json({
                message: "Invalid year"
            })
        }

        return res.status(200).json(await reportService.getEnergyUsageByYear(year))
    }
}