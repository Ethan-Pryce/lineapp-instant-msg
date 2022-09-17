import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import io from 'socket.io-client';

const PORT = 5000
const socket = io('http://localhost:' + PORT);





let message = "hello"
let msg_response = "howdy"

// This should be whatever your target is. 
let button = document.getElementById("send")


button.addEventListener('onclick', function(e){
  e.preventDefault();
  // replace message with the value in your input field
  socket.emit('chat message', message)
});

socket.on("chat message", function(message){
  
  //Simply replace this with code that appends to an array of items to render in react using .map
  console.log(message)
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <button id="send">Click me</button>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
