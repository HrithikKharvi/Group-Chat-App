const socket = require("socket.io");
const http = require("http")
const app = require("./appRESTServer.js");

const { onJoinRequest, onLeave } = require("./logics/groups.js");
const { onMessage } = require("./logics/groupMessageHandler.js");

const socketAppServer = http.createServer(app);
const io = socket(socketAppServer, { cors: "*" });


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

module.exports = { socketAppServer };