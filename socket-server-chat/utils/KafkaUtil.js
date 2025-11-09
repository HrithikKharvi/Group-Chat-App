const chatMessageType = require('../schemas/groupMessage.js');

const prepareKafkaMessageFromGroupMessage = (message) => {
    return chatMessageType.toBuffer(message);
}

module.exports = { prepareKafkaMessageFromGroupMessage };