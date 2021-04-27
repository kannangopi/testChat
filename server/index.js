const express = require("express");
const socket = require("socket.io");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const server = app.listen("3011", () => {
  console.log("server is running on 3011");
});

io = socket(server);

io.on("connection", (socket) => {
  console.log(socket.id);
  console.log("user connected");

  socket.on("joining", (room) => {
    console.log(room);
    socket.join(room);
  });

  socket.on("chatsend",(msg)=>{
      console.log(msg);
    //   socket.emit('disp',msg)
    io.to(msg.room).emit('disp',msg.message)
  })

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
