const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: process.env["KAFKA.AVRO.PRODUCER.GROUPMESSAGE.SERVER.CLIENT.ID"],
    brokers: [process.env["KAFKA.AVRO.PRODUCER.GROUPMESSAGE.SERVER.HOST.IP"]]
});

const producer = kafka.producer();

const getKafkaProducer = () => {
    return producer;
}

module.exports = { getKafkaProducer };
