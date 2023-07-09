require('dotenv').config()
const mqtt = require('mqtt')

const options = {
    username: process.env.MQTT_USERNAME,
    password: process.env.MQTT_PASSWORD
}
const HOST = process.env.MQTT_HOST

const mqttClient = mqtt.connect(HOST, options)

mqttClient.on('connect', () => {
    console.log('Connected to mqtt')
})

module.exports = mqttClient