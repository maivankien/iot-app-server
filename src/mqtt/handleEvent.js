const deviceHandler = require('./device.handler')
const subscriptionHandler = require('./subscriptionHandler')

subscriptionHandler.subscribe('home/device')
subscriptionHandler.subscribe('home/device/connected')

module.exports = (mqttClient) => {
    mqttClient.on('message', (topic, message) => {
        switch (topic) {
            case 'home/device':
                // deviceHandler.
                break;
            case 'home/device/connected':
                deviceHandler.handleDeviceConnected()
                break;
            default:
                break;
        }
    })
}