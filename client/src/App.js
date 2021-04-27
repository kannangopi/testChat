import React,{useState,useEffect} from 'react';
import io from 'socket.io-client';
import './App.css';

let socket;
const PORT = 'localhost:3011/'

function App() {
  // const [user,useUser]= useState(true);

  useEffect(()=>{
    socket = io(PORT)

  },[PORT])



  return (
    
    <div className="App">
      {!user ? <h1>not loged in </h1>:
      <div className="input">
        <input type="text" placeholder="user"/>
        <input type="text" placeholder="room"/>
        <button>submit</button>
      </div>

      }
    </div>
  );
}

export default App;
