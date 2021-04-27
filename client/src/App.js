import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./App.css";

let socket;
const PORT = "localhost:3011/";

function App() {
  const [logedin, setLogedin] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [logmessage, setLogmessage] = useState([]);

  useEffect(() => {
    socket = io(PORT);
  }, [PORT]);

  useEffect(()=>{
    socket.on('disp',(sermsg)=>{
      setLogmessage([...logmessage, sermsg])
    })
    console.log("hhhhhhhhhhhhh",logmessage);
  },[logmessage])

  const joinChat = () => {
    console.log("client joined");
    socket.emit("joining", room);
    setLogedin(true);
    
  };

  const sendChat = () => {
    console.log("sending chat from client");
    socket.emit("chatsend", {room:room,message});
    setMessage("")
  };

  return (
    <div className="App">
      {!logedin ? (
        <div className="input">
          <input
            type="text"
            placeholder="user"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="room"
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinChat}>join chat</button>
        </div>
      ) : (
        <div className="input">
          <p>{logmessage}</p>
          <div className="inputloged">
            
            <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendChat}>send msg</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
