module.exports["onMessage"] = (data, socket, io) => {
    let { message, group, username } = data;
    socket.broadcast.to(group).emit("message_res", {
        "message": message,
        "username": username,
        "group": group
    });
}

module.exports["onLeave"] = (data, socket, io) => {
    let { group } = data.group;
    console.log(group)
    for (groups in group) {
        socket.leave(group);
    }
}

module.exports["onJoinRequest"] = (data, socket, io) => {
    let { groups } = data;

    for (let g of groups) {
        socket.join(g);
    }

    socket.emit("res", "joined group " + groups);
}