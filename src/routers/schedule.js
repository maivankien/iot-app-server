const express = require("express")
const router = express.Router()

const scheduleController = require('../controllers/schedule.controller')

router.put('/:id', scheduleController.updateJob)
router.delete('/:id', scheduleController.deleteJob)
router.get('/:deviceId', scheduleController.getAllJobs)
router.post('/:deviceId', scheduleController.createJob)

module.exports = router