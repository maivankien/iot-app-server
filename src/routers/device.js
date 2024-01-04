const express = require("express")
const router = express.Router()

const deviceController = require('../controllers/device.controller')


router.get('/list', deviceController.getListDevice)
router.put('/update', deviceController.updateDevice)

module.exports = router