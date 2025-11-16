//ON CREATE AND JOIN REQUEST - WE GET LIST OF GROUPS AND A SOCKET.
//ON JOIN ON CONNECTION WE GET THE LIST OF GROUPS TO BE JOINED IN SERVER AND A SOCKET
require("dotenv").config();
const logging = require("./logger.js");

const { socketAppServer } = require("./webSocketServer.js");

socketAppServer.listen(3000, () => {
    logging.info("server listening at port 3000");
})