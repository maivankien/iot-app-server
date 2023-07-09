const mqttClient = require('../config/mqtt')

module.exports = {
    async subscribe(topic) {
        mqttClient.subscribe(topic)
    },

    async getMessage() {
        mqttClient.on('message', (topic, message) => {
            console.log(topic, message)
        })
    }
}