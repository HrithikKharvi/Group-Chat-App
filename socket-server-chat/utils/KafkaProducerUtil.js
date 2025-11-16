const { getKafkaProducer } = require("../configurations/kafkaProducer.js");
const InternalException = require("../exceptions/InternalException.js");
const logging = require("../logger.js");

async function publishMessageToKafkaTopic(avroBuffer, topicName) {
    const producer = getKafkaProducer();

    try {
        await producer.connect();
        await producer.send({
            topic: topicName,
            messages: [{ value: avroBuffer }]
        });
        logging.info("Message sent successfully");
    } catch (error) {
        const isConnectError = error.message?.includes("Connect");
        const message = isConnectError
            ? "Unable to establish connection"
            : "Unable to send the message!";

        logging.error("error while connecting or sending the kafka message");
        throw new InternalException(message);
    } finally {
        try {
            await producer.disconnect();
        } catch (disconnectError) {
            logging.warn("Failed to disconnect Kafka producer:", disconnectError.message);
        }
    }
}

module.exports = { publishMessageToKafkaTopic };