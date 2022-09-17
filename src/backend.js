import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Server } from "socket.io"
import { io } from "socket.io-client"


var express = require(express)
const app = express()
const io = new Server(5000)
const socket = io("//localhost:5000")
const http = require('http')
const server = http.createServer(app)

message = "hello"
msg_response = "howdy"

io.on('connection', (socket) => {
    console.log('a user connected');
  });
  
server.listen(3000, () => {
    console.log('listening on *:3000');
  });
