import React from 'react';

import socketio from "socket.io-client";
import { jwtDecode } from "jwt-decode";

export const socket = socketio.connect(process.env.REACT_APP_HOST_NAME, {
  auth: { token: sessionStorage.getItem("userId") }
});
socket.on('connect', (err) => {
  console.log(`I'm connected with sdsad backdc-end`);
});

socket.emit(
  "new-user-add",
  localStorage.getItem("accessToken") && jwtDecode(localStorage.getItem("accessToken"))?.data?._id
);
socket.emit('login', { userId: localStorage.getItem("userId") });
export const SocketContext = React.createContext(null);      