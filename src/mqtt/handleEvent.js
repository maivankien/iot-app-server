module.exports = (mqttClient) => {
    mqttClient.subscribe('mqtt/topic')
    mqttClient.on('message', (topic, message) => {
        console.log(`Received message on topic: ${topic}. Message: ${message.toString()}`);
    })
}