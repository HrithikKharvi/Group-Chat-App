const avro = require("avsc");

const groupChatMessage = avro.Type.forSchema({
    type: "record",
    name: "GroupMessage",
    fields: [
        { name: "version", type: "int" },
        { name: "messageText", type: "string" },
        { name: "sentByUserId", type: "string" },
        { name: "sentToGroupId", type: "string" },
        { name: "repliedToMessageId", type: "string" },
        { name: "messageId", type: "string" },
        { name: "sentOn", type: "string" }
    ]
})

module.exports = groupChatMessage;