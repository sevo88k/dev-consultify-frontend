import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/account_home/Navbar";
import Sidebar from "../components/account_home/Sidebar";
import NeedAssist from "../components/needAssist/NeedAssist";
import io from "socket.io-client";
import {
  closeAssist,
  maxChat,
  setAssistance,
  viewChat,
} from "../../Redux/Reducers/chatSlice";
import { getAssistance } from "../../Redux/Actions/user/userAll";
import AssistChat from "../components/needAssist/AssistChat";
import jwt_decode from "jwt-decode";
import MinChat from "../components/needAssist/MinChat";

function Layout({ children }) {
  const showAssist = useSelector((state) => state.chat.showAssist);
  const convoId = useSelector((state) => state.chat.assistConversationId);
  const isShowChat = useSelector((state) => state.chat.showChat);
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_HOST_NAME;
  const [chatSocket, setSocket] = useState();
  const socket = useRef();
  const [onlineUsers, setOnlineUsers] = useState();
  const [docOnline, setDocOnline] = useState(false);
  const isHideChat = useSelector((state) => state.chat.isMinChat);


  useEffect(() => {
    socket.current = io.connect(BASE_URL);
    setSocket(socket.current);
    //ONLINE USERS
    socket.current.emit(
      "new-user-add",
      jwt_decode(sessionStorage.getItem("token"))?.id
    );
    return () => {
      socket.current.disconnect();
    };
  }, []);

  useEffect(() => {
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
    socket.current.on("get-convo", (chat) => {
      console.log(chat)
      dispatch(setAssistance(chat));
    });
  }, [socket.current]);
  useEffect(() => {
    if (onlineUsers) {
      setDocOnline(
        onlineUsers?.findIndex((item) => item.userId == "doctor") != -1
      );
    }
  }, [onlineUsers]);

  // useEffect(() => {
  //   setSocket(io.connect(BASE_URL));

  //   return () => {
  //     // socket.disconnect();
  //     console.log(socket);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (isShowChat && (!socket.current || !socket.current.connected)) {
  //     // setSocket(io.connect(BASE_URL));
  //     socket.current = io.connect(BASE_URL);
  //   }

  //   if (isShowChat) {
  //     console.log(socket.current.connected);
  //     console.log(socket.current.connected);
  //   }
  // }, [isShowChat]);

  const handleStart = () => {
    (async () => {
      await socket.current.emit("get-assistance", {
        id: jwt_decode(sessionStorage.getItem("token"))?.id,
      });
      dispatch(viewChat());
    })();
  };

  const handleClose = () => {
    dispatch(closeAssist());
  };

  // useEffect(() => {
  //   socket.on("recieve_message", (messageObject) => {
  //     console.log(messageObject, "messageObject ajay");
  //     //  dispatch(addMessage(messageObject));
  //   });
  // }, [socket]);

  return (
    <div>
      <div id="wrapper" className="user-panel">
        <Navbar />
        {showAssist && docOnline ? (
          <NeedAssist handleStart={handleStart} handleCloseBtn={handleClose} />
        ) : isShowChat && !isHideChat && chatSocket && convoId ? (
          <AssistChat
            socket={chatSocket}
            convoId={convoId}
            onlineUsers={onlineUsers}
          />
        ) : (
          isShowChat && <MinChat onlineUsers={onlineUsers} />
        )}

        <section className="main_content_wrapper">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2">
                <Sidebar />
              </div>
              {children}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
{
  /* isShowChat && <MinChat onlineUsers={onlineUsers} /> */
}
export default Layout;
{
  /* console.log(isShowChat, chatSocket, convoId) */
}
