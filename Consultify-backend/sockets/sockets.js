
let onlineUsers = [];
let videoUsers = [];

module.exports = function (io) {
  io.on("connection", (socket) => {
    console.log(`User connected with this id ${socket.id}`);
    socket.emit("me", socket.id);


    socket.on("salon-disconnected", (data) => {
      socket.to(data.to).emit("salon-left"); 
    });

    socket.on("user-disconnected", (data) => {
      socket.to(data.to).emit("user-left");
    });

    socket.on("callUser", ({ userToCall, signalData, from, name }) => {
      io.to(userToCall).emit("call_User", { signal: signalData, from, name });
    });

    socket.on("answerCall", (data) => {
      io.to(data.to).emit("callAccepted", data.signal);
    });

    socket.on("join_room", (convoId) => {
      socket.join(convoId);
    });

    socket.on("new-user-add", (newUserId) => {
      if (!onlineUsers.some((user) => user.userId === newUserId)) {
        // if user is not added before
        onlineUsers.push({ userId: newUserId, socketId: socket.id });
        console.log("new user is here!", onlineUsers);
      }
      io.emit("get-users", onlineUsers);
    });

    socket.on("video-user-add", (newUserId) => {
      if (!videoUsers.some((user) => user.userId === newUserId)) {
        // if user is not added before
        videoUsers.push({ userId: newUserId, socketId: socket.id });
        // console.log("new user is here!", videoUsers);
      }
      io.emit("video-users", videoUsers);
    });

 

    socket.on("disconnect", () => {
      console.log("disconnected", socket.id);

      videoUsers = videoUsers.filter((user) => user.socketId !== socket.id);
      onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
      io.emit("get-users", onlineUsers);
      io.emit("video-users", videoUsers);
      console.log("user disconnected", onlineUsers);
      // send all online users to all users
    });
  });
};
