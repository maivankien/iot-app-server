const deviceService = require('../services/device.service')
const subscriptionHandler = require('./subscriptionHandler')

module.exports = {
    async handleDeviceConnected() {
        const devices = await deviceService.getListDevice()
        devices.forEach(device => {
            if (device.state === 1) {
                subscriptionHandler.publish('home/device', JSON.stringify({
                    pin: device.pin,
                    deviceId: device.id,
                    state: device.state
                }))
            }
        })
    }
}