// User side Video Call

import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Peer from "simple-peer";

const VideoCall = ({ me, socket, consInfo, onlineUsers }) => {
  const navigate = useNavigate();
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState("");
  const [call, setCall] = useState({});
  const [userId, setUserId] = useState();
  const [viewVal, setShowVal] = useState(false);
  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();
  

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )
  useEffect(() => {
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

    socket.on("salon-left", () => {
      toast.success("Salon left the call");
      setCallEnded(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });

    // return () => {
    //   window.location.reload();
    // };
  }, []);

  useEffect(() => {
    window
      .matchMedia("(max-width: 576px)")
      .addEventListener('change', e => {
        setMatches(e.matches);
        setShowVal(true)
      });

    window
      .matchMedia("(min-width: 580px)")
      .addEventListener('change', e => {
        setMatches(e.matches);
        setShowVal(false)
      });
  }, []);


  useEffect(() => {
    if (userId) {
      const isUser = onlineUsers?.find((item) => item.userId == userId);
      if (!isUser) {
        // window.location.reload();
      }
    }
  }, [onlineUsers]);

  useEffect(() => {
    if (consInfo) {
      const socketId = onlineUsers?.find(
        (item) => item.userId == consInfo?.user_id?._id
      )?.socketId;
      if (socketId) {
        setUserId(socketId);
      }
    }
  }, [consInfo, onlineUsers]);

  const answerCall = () => {
    setCallEnded(false);
    setCallAccepted(true);
    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on("signal", (data) => {
      socket.emit("answerCall", { signal: data, to: call.from });
    });

    peer.on("stream", (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);
    connectionRef.current = peer;
  };


  const leaveCall = () => {
    socket.emit("user-disconnected", { to: call.from });
     navigate("/client_view")
     window.location.reload();
    setCallEnded(true);
    setCall({});
    setCallAccepted(false);
    connectionRef.current.onDisconnect();
  };


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
          {call.isReceivingCall && !callAccepted ? (
            <div className="start_call">
              <button onClick={() => {
                answerCall()
                //  setShowVal(true)
              }} className="cre_new start-call">
                Join Call
              </button>
            </div>
          ) : null}

          {call.isReceivingCall && callAccepted && (
            <button
              onClick={leaveCall}
              className={
                callAccepted && !callEnded
                  ? "white-btn small_white_btn leave-call"
                  : "white-btn small_white_btn visibility-hidden leave-call"
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
