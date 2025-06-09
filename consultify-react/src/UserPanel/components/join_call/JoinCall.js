import React from "react";
import Chat from "./Chat";
import io from "socket.io-client";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserConsInfo } from "../../../Redux/Actions/user/userAll";
import { useParams } from "react-router-dom";
import ConsNotes from "./ConsNotes";
import VideoCall from "./VideoCall";
import jwtDecode from "jwt-decode";
import JoinCallLayout from "../../Layout/JoinCallLayout";
export default function JoinCall() {
  const BASE_URL = process.env.REACT_APP_HOST_NAME;
  const [socket, setSocket] = useState();
  const dispatch = useDispatch();
  const socketRef = useRef();
  const { id } = useParams();
  const userConsInfo = useSelector((state) => state.consultaions.consInfo);
  const [me, setMe] = useState("");
  const [onlineUsers, setOnlineUsers] = useState();

  useEffect(() => {
    socketRef.current = io.connect(BASE_URL);
    socketRef.current.emit(
      "video-user-add",
      jwtDecode(sessionStorage.getItem("token")).id
    );
    socketRef.current.on("me", (myId) => {
      setMe(myId);
    });
    setSocket(socketRef.current);
    dispatch(getUserConsInfo(id));
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    socketRef.current.on("video-users", (users) => {
      setOnlineUsers(users);
    });
  }, [socketRef.current]);

  return (
    <JoinCallLayout>
      <div className="col-lg-10">
        <div className="desc_area pb-0">
          <div className="row">
            <div className="col-lg-7">
              {onlineUsers && socket && userConsInfo && me ? (
                <VideoCall
                  me={me}
                  consInfo={userConsInfo?.cons}
                  socket={socketRef.current}
                  onlineUsers={onlineUsers}
                />
              ) : (
                console.log(onlineUsers, socket, userConsInfo, me)
              )}
              {userConsInfo && socket ? (
                <Chat socket={socket} userConsInfo={userConsInfo} />
              ) : null}
            </div>
            {userConsInfo && socket ? (
              <ConsNotes socket={socket} userConsInfo={userConsInfo} />
            ) : null}
          </div>
        </div>
      </div>
    </JoinCallLayout>
  );
}
