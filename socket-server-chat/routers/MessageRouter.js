const express = require("express");
const Router = express.Router();
const { sendMessageToGroup } = require("../controllerHandler/messageHandler.js");

Router.route("/sendMessage")
    .get(sendMessageToGroup);

module.exports = Router;
