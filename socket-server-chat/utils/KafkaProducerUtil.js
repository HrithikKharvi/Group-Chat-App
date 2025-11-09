const { getKafkaProducer } = require("../configurations/kafkaProducer.js")

async function publishMessageToKafkaTopic(avroBuffer, topicName) {
    const producer = getKafkaProducer();
    try {
        await producer.connect();
        await producer.send({
            topic: topicName,
            messages: [{ value: avroBuffer }]
        });

        console.log("Message sent successfuly");
    } catch (err) {
        console.error("Error sending message: ", err);
    } finally {
        await producer.disconnect();
    }
}

module.exports = { publishMessageToKafkaTopic };