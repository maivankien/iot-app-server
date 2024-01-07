const mqttClient = require('../config/mqtt')

module.exports = {
    async subscribe(topic) {
        mqttClient.subscribe(topic)
    },

    async getMessage(topicGet) {
        mqttClient.on('message', (topic, message) => {
            if (topic === topicGet) {
                return message
            } 
            return null
        })
    },

    async publish(topic, message) {
        mqttClient.publish(topic, message)
    },
}