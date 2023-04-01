const socketController = (socket) => {
  console.log("Client connected", socket.id);
  // send a message to the client
  // socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("disconnect", (...args) => {
    // console.log("Client disconnected");
  });

  socket.on("send-message", (payload, callback) => {
    const id = 123456;
    callback({ id, date: new Date().getTime() });
    socket.broadcast.emit('send-message', payload);

  });
};
module.exports = {
  socketController
};