// Salon side Video Call
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Peer from "simple-peer";
import { Encryptedid } from "../../utils/BcruptEncyptid";

const VideoCall = ({ me, consInfo, socket, onlineUsers, clientId }) => {
  // console.log(consInfo,"consInfo");
  // console.log(socket,"SHOCKET"
  //   ,consInfo,"CONSiNFO"
  //   ,me,"mEeee");
  //   console.log(onlineUsers,"onlineuser");
  const navigate = useNavigate();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [call, setCall] = useState({});
  const [name, setName] = useState("James Pearlman");
  const [userId, setUserId] = useState();
  const [userOff, setUserOff] = useState(false);
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  const today = new Date().toISOString().split('T')[0];
  const nuewdate =  new Date(consInfo?.date).toISOString().split('T')[0];
  useEffect(() => {
    if(today<=nuewdate){

  
    if (navigator) {
      navigator?.mediaDevices
        ?.getUserMedia({ video: true, audio: true })
        .then((currentStream) => {

          setStream(currentStream);
        
      

          myVideo.current.srcObject = currentStream;
        });
    }

    socket.on("call_User", ({ from, name: callerName, signal }) => {
      setCall({ isReceivingCall: true, from, name: callerName, signal });
    });
    socket.on("user-left", () => {
      toast.success("User left the Call");
      setCallEnded(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });


  }
    // return () => {
    //   window.location.reload();
    // };
  }, [nuewdate]);

  useEffect(() => {
    if (userId) {
      const isUser = onlineUsers?.find(
        (item) => item.userId == consInfo?.clientId
      );
      if (isUser) {
      }
    }
  }, [onlineUsers]);
  useEffect(() => {
    if (consInfo && onlineUsers) {
      const socketId = onlineUsers?.find(
        (item) => item.userId == consInfo?.clientId
      )?.socketId;
      if (socketId) {
        setUserId(socketId);
      }
    }
  }, [consInfo, onlineUsers]);



  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });
    peer.on("signal", (data) => {
      socket.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });



    socket.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);

      peer.on("stream", (currentStream) => {
        userVideo.current.srcObject = currentStream;
      });
    });
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    socket.emit("salon-disconnected", { to: userId });
    setCallEnded(true);
    setCallAccepted(false);
    connectionRef.current.destroy();
 
    window.location.href=`/client_view/${Encryptedid(clientId)}`

  };

  console.log(callAccepted, !callEnded, userVideo, "userId && !callAccepted");

  return (
    <>
      <div className="mb-4 video_call_section">
        <div className="pb-0">
          <div className="consulatation_card">
            {callAccepted && !callEnded ? (
              <video
                playsInline
                width="626"
                height="323"
                ref={userVideo}
                autoPlay
                className="full-video"
              />
            ) : (
              <img
                src={require("../../assets/img/bigrectangle.png")}
                alt="live_chat"
                className="img-fluid large_img"
              />
            )}
            <img
              src={require("../../assets/img/small_video_frame.png")}
              alt="live_chat"
              className="img-fluid video_call_frame"
            />
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="salon-video"
            />
          </div>
        </div>
        <div className="call-bottom-btn-video">
          {userId && !callAccepted && (
            <button
              onClick={() => userId && callUser(userId)}
              className="cre_new start-call"
            >
              Start Call
            </button>
          )}

          {userId && callAccepted && (
            <button
              onClick={leaveCall}
              className={
                callAccepted && !callEnded
                  ? " white-btn small_white_btn leave-call"
                  : " white-btn small_white_btn visibility-hidden leave-call"
              }
            >
              Leave Call
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default VideoCall;
