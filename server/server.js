const express = require("express");
const http = require("http");
const socket = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socket(server);

const port = process.env.PORT || 3000;

io.on("connection", (socket) => {
  console.log("A user connected");
});

// socket.on("join", (room) => {
//   socket.join(room);
//   console.log(`User ${socket.id} has joined room ${room}`);
// });
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

server.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
