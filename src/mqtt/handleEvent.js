const deviceHandler = require('./device.handler')
const energyService = require('../services/energy.service')
const subscriptionHandler = require('./subscriptionHandler')

const TOPIC_MQTT = {
    DEVICE: 'home/device',
    ENERGY_DAY: 'home/energy/day',
    ENERGY_MONTH: 'home/energy/month',
    DEVICE_CONNECTED: 'home/device/connected',
}

for (const key in TOPIC_MQTT) {
    subscriptionHandler.subscribe(TOPIC_MQTT[key])
}

module.exports = (mqttClient) => {
    mqttClient.on('message', (topic, message) => {
        switch (topic) {
            case TOPIC_MQTT.DEVICE:
                // deviceHandler.
                break;
            case TOPIC_MQTT.DEVICE_CONNECTED:
                deviceHandler.handleDeviceConnected()
                break;
            case TOPIC_MQTT.ENERGY_DAY:
                energyService.saveEnergyDay(JSON.parse(message))
                break
            case TOPIC_MQTT.ENERGY_MONTH:
                energyService.saveEnergyMonth(JSON.parse(message))
                break
            default:
                break;
        }
    })
}