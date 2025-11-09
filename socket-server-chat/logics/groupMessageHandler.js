const { prepareKafkaMessageFromGroupMessage } = require("../utils/KafkaUtil.js");
const { publishMessageToKafkaTopic } = require("../utils/KafkaProducerUtil.js");

const persistAndPushIncomingMessage = async (message, topic) => {
    const kafkaGroupMessage = prepareKafkaMessageFromGroupMessage(message);
    await publishMessageToKafkaTopic(kafkaGroupMessage, topic);
}

const onMessage = (data, socket, io) => {
    let { message, group, username } = data;
    socket.broadcast.to(group).emit("message_res", {
        "message": message,
        "username": username,
        "group": group
    });
}


module.exports = { persistAndPushIncomingMessage, onMessage };