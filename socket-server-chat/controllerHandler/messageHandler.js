const { persistAndPushIncomingMessage } = require("../logics/groupMessageHandler.js");
const GROUP_MESSAGE_TOPIC = process.env["KAFKA.AVRO.PRODUCER.GROUPMESSAGE.TOPIC.NAME"]

const sendMessageToGroup = async (req, res, next) => {
    try {
        await persistAndPushIncomingMessage({
            version: 1,
            messageText: "Hello group this is to test the decoupling of the logic!",
            sentByUserId: "user456",
            sentToGroupId: "group123",
            repliedToMessageId: "",
            messageId: "test",
            sentOn: new Date().toISOString()
        }, GROUP_MESSAGE_TOPIC);
        res.send("Message Sent");
    } catch (exc) {
        return next(exc);
    }
}

module.exports = { sendMessageToGroup };