import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import './App.css';

let socket;
const PORT = 'localhost:3011/'

function App() {
  const [user,setUser]= useState(true);
  const [username,setUsername] = useState("");
  const [room,setRoom] = useState("");

  useEffect(()=>{
    socket = io(PORT)

  },[PORT])

  const sendChat = ()=>{
    console.log("sending from client");
    socket.emit('chat',room)
  }

  return (
    
    <div className="App">
      {!user ? <h1>not loged in </h1>:
      <div className="input">
        <input type="text" placeholder="user" onChange = {(e)=>setUser(e.target.value)}/>
        <input type="text" placeholder="room" onChange = { (e)=>setRoom(e.target.value)}/>
        <button onClick={sendChat}>submit</button>
      </div>

      }
    </div>
  );
}

export default App;
