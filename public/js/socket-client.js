// HTML references
const lblOnline = document.querySelector("#lblOnline");
const lblOffline = document.querySelector("#lblOffline");
const txtMessage = document.querySelector("#txtMessage");
const btnSend = document.querySelector("#btnSend");
const socket = io();

socket.on("connect", () => {
  console.log("Connected to server");
  lblOffline.style.display = "none";
  lblOnline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Disconnected from server");
  lblOffline.style.display = "";
  lblOnline.style.display = "none";
});

socket.on('send-message', (payload) => {
  console.log("🚀 ~ file: socket-client.js:21 ~ socket.on ~ payload:", payload);

});

btnSend.addEventListener("click", () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: "123ABC",
    date: new Date().getTime(),
  };
  socket.emit("send-message", payload, (id) => {
    console.log("🚀 ~ file: socket-client.js:34 ~ socket.emit ~ id:", id);
  });
});