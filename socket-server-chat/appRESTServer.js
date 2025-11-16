const express = require("express");
const app = express();


const messageRouter = require("./routers/MessageRouter.js");
const errorHandler = require("./errorHandler.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/message", messageRouter);


app.use(errorHandler);
module.exports = app;