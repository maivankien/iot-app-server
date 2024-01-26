const express = require("express")
const router = express.Router()

const reportController = require("../controllers/report.controller")

router.get("/energy/month", reportController.getEnergyUsageByMonth)
router.get("/energy/year", reportController.getEnergyUsageByYear)

module.exports = router