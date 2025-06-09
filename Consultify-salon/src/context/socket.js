import React from 'react';

import socketio from "socket.io-client";

export const socket = socketio.connect(process.env.REACT_APP_HOST_NAME, {
  auth: { token: localStorage.getItem("userId") }
});
socket.on('connect', (err) => {
  console.log(`I'm connected with sdsad backdc-end`);
});
socket.emit('login', { userId: localStorage.getItem("userId") });
export const SocketContext = React.createContext(null);      