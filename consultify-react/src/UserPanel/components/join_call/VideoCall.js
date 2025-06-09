// User side Video Call

import React, { useState, useRef, useEffect } from "react";
import Peer from "simple-peer";
import { toastInfo } from "../../../Redux/Reducers/admin/adminPanelSlice";
import ModalView from "../consultaions/ModalView";

const VideoCall = ({ me, socket, consInfo, onlineUsers }) => {
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

    socket.on("doctor-left", () => {
      toastInfo("Doctor left the call");
      setCallEnded(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    });

    return () => {
      window.location.reload();
    };
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
  //   useEffect(() => {
  //     const socketService = new Sock();

  //     console.log('mount it!');

  //     return function cleanup() {
  //         socketService.disconnect();
  //     }
  // }, []);

  // const callUser = (id) => {
  //   const peer = new Peer({ initiator: true, trickle: false, stream });
  //   peer.on("signal", (data) => {
  //     socket.emit("callUser", {
  //       userToCall: id,
  //       signalData: data,
  //       from: me,
  //       name,
  //     });
  //   });

  //   peer.on("stream", (currentStream) => {
  //     userVideo.current.srcObject = currentStream;
  //   });

  //   socket.on("callAccepted", (signal) => {
  //     setCallAccepted(true);
  //     peer.signal(signal);
  //   });

  //   connectionRef.current = peer;
  // };

  const leaveCall = () => {
    socket.emit("user-disconnected", { to: call.from });
    setCallEnded(true);
    setCall({});
    setCallAccepted(false);
    connectionRef.current.onDisconnect();
    window.location.reload();
  };

  return (
    <>
      <ModalView viewVal={viewVal} setShowVal={setShowVal} />
      <div >
      {/* <div >
      {matches && (<h1>Big Screen</h1>)}
      {!matches && (<h3>Small Screen</h3>)}
    </div> */}
      </div>
      <div className="d-flex justify-content-end mb-3">
        <button
          onClick={leaveCall}
          className={
            callAccepted && !callEnded
              ? "btn btn-primary white-btn small_white_btn"
              : "btn btn-primary white-btn small_white_btn visibility-hidden"
          }
        >
          Leave Call
        </button>
      </div>

      <div className="card mb-4 video_call_section">
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
                src={require("../../../assets/images/lg_video_frame.png")}
                alt="live_chat"
                className="img-fluid large_img"
              />
            )}
            <img
              src={require("../../../assets/images/small_video_frame.png")}
              alt="live_chat"
              className="img-fluid video_call_frame"
            />
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="doctor-video"
            />
            {call.isReceivingCall && !callAccepted ? (
              <div className="start_call">
                <button onClick={() => {
                  answerCall()
                //  setShowVal(true)
                }} className="cre_new">
                  Join Call
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {/* <div className="card mb-4 video_call_section">
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
                src={require("../../../assets/images/lg_video_frame.png")}
                alt="live_chat"
                className="img-fluid large_img"
              />
            )}
            <img
              src={require("../../../assets/images/small_video_frame.png")}
              alt="live_chat"
              className="img-fluid video_call_frame"
            />
            <video
              playsInline
              muted
              ref={myVideo}
              autoPlay
              className="doctor-video"
            />

            {call.isReceivingCall && !callAccepted ? (
              <div className="start_call">
                <button onClick={answerCall} className="cre_new">
                  Join Call
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div> */}
    </>
  );
};

export default VideoCall;
