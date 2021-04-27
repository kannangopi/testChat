const express = require('express')
const socket = require('socket.io')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())


const server = app.listen("3011",()=>{
    console.log("server is running on 3011");
})

 io = socket(server)

io.on('connection',(socket)=>{
    console.log(socket.id)
    console.log("user connected")

    socket.on('chat',(data)=>{
        console.log(data);
        socket.join(data)
    })

    socket.on('disconnect',()=>{
        console.log("user disconnected")
    })
})