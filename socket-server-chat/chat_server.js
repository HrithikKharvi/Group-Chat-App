//ON CREATE AND JOIN REQUEST - WE GET LIST OF GROUPS AND A SOCKET.
//ON JOIN ON CONNECTION WE GET THE LIST OF GROUPS TO BE JOINED IN SERVER AND A SOCKET

const socket = require("socket.io");
const http = require("http")
const express = require("express");
const app = express();


require("dotenv").config();

const server = http.createServer(app);
const io = socket(server, { cors: "*" });
const { onJoinRequest, onLeave } = require("./logics/groups.js");
const { persistAndPushIncomingMessage, onMessage } = require("./logics/groupMessageHandler.js");

const GROUP_MESSAGE_TOPIC = process.env["KAFKA.AVRO.PRODUCER.GROUPMESSAGE.TOPIC.NAME"]

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {

    const callOnJoin = data => {
        onJoinRequest(data, socket, io);
    }

    const callOnMessage = data => {
        onMessage(data, socket, io);
    }
    const callOnLeaveGroup = data => {
        onLeave(data, socket, io);
    }

    socket.on("join", callOnJoin);
    socket.on("message", callOnMessage);
    socket.on("leave", callOnLeaveGroup)
})

server.listen(3000, () => {
    console.log("server listening at port 3000");
})

app.get("/sendMessage", async (req, res) => {
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
})



