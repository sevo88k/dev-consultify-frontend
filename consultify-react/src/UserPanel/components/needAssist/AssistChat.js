import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getConversation } from "../../../Redux/Actions/chat";
import {
  addMessage,
  closeChat,
  minChat,
} from "../../../Redux/Reducers/chatSlice";

const AssistChat = ({ socket, convo_id, onlineUsers }) => {
  const dispatch = useDispatch();
  const [stateForScroll, setStateForScroll] = useState();
  const [text, setText] = useState("");
  const ref = useChatScroll(stateForScroll);
  const [convoId, setConvoId] = useState();
  // const [docStatus, setDocStatus] = useState();
  const conversation = useSelector((state) => state.chat.conversation);
  const isHideChat = useSelector((state) => state.chat.isMinChat);

  useEffect(() => {
    if (!convo_id) {
      setConvoId(window.sessionStorage.getItem("convoId"));
    } else {
      setConvoId(convo_id);
    }
  }, []);

  useEffect(() => {
    if (convoId) {
      (async () => {
        dispatch(getConversation(convoId));
        await socket.emit("join_room", convoId);
      })();
    }
  }, [convoId]);

  useEffect(() => {
    socket.on("recieve_message", (messageObject) => {
      dispatch(addMessage(messageObject));
      setStateForScroll(messageObject.message);
    });
  }, [socket]);

  function useChatScroll(dep) {
    const ref = useRef();
    useEffect(() => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, [dep]);
    return ref;
  }

  const sendText = (event) => {
    event.preventDefault();
    if (text) {
      const messageObject = {
        convoId: convoId,
        message: text,
        sender: "user",
        time: JSON.stringify(new Date()),
      };
      console.log(messageObject, "sendText");
      socket.emit("send_message", messageObject);
      dispatch(addMessage(messageObject));
      setStateForScroll(text);
      setText("");
    }
  };
  const keypress = (e) => {
    if (e.key === "Enter") {
      sendText(e);
    }
  };
  return (
    <div
      className={isHideChat ? "right-chat-fixed hide_chat" : "right-chat-fixed"}
    >
      <div className="card">
        <div className="card-body p-3">
          <div className="chat-box-c">
            <div className="note-header-part p-0 mb-4 border-0">
              <div className="d-flex flex-column">
                <h4 className="title_text">{"James Pearlman"}</h4>
                {onlineUsers?.findIndex((item) => item.userId == "doctor") !=
                -1 ? (
                  <div class="online-status">
                    <span class="dot-green"></span>
                    Online
                  </div>
                ) : null}
              </div>
              <button
                onClick={() => {
                  dispatch(closeChat());
                  socket.disconnect();
                }}
                style={{ border: "none" }}
                className="end-chat-btn"
              >
                End Chat
              </button>
             <button className="minimize" onClick={() => dispatch(minChat())}>
                -
              </button>
            </div>
            <form onSubmit={sendText}>
              <div ref={ref} className="chat-area-height ">
                {Object.keys(conversation).length > 0 &&
                  conversation[convoId]?.map((message, index) => {
                    return message?.sender === "doctor" ? (
                      <div key={index} className="left-side-chat">
                        <span>{message?.message}</span> 
                      </div>
                    ) : (
                      <div key={index} className="right-side-chat">
                        <span>{message?.message}</span>
                      </div>
                    );
                  })}
              </div>
              <div className="send-msg-part hide_scroll">
                <textarea
                  onChange={(e) => setText(e.target.value)}
                  className="border-0"
                  placeholder="Type here..."
                  value={text}
                  onKeyDown={keypress}
                ></textarea>
                <button className="btn send-chat-btn" type="submit">
                  <i class="bx bxs-send"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistChat;
