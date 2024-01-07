const deviceService = require('../services/device.service');

module.exports = {
    async getListDevice(req, res) {
        const result = await deviceService.getListDevice()
        return res.status(200).json(result)
    },

    async updateDevice(req, res) {
        const { deviceId, state } = req.body
        const update = await deviceService.updateDevice(deviceId, state)
        return res.status(200).json(update)
    }
}