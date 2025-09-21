//ON CREATE AND JOIN REQUEST - WE GET LIST OF GROUPS AND A SOCKET.
//ON JOIN ON CONNECTION WE GET THE LIST OF GROUPS TO BE JOINED IN SERVER AND A SOCKET

const socket = require("socket.io");
const http = require("http")
const express = require("express");
const app = express();

const server = http.createServer(app);
const io = socket(server, { cors: "*" });
const { onMessage, onJoinRequest, onLeave } = require("./logics/groups.js");

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



