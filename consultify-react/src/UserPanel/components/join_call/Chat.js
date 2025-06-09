import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import {
  addConsMessage,
  addConvoArray,
} from "../../../Redux/Reducers/chatSlice";

const Chat = ({ socket, userConsInfo }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [convoId, setConvoId] = useState();
  const [stateForScroll, setStateForScroll] = useState();
  const ref = useChatScroll(stateForScroll);
  const conversation = useSelector((state) => state.chat.consultationConvo);

  useEffect(() => {
    socket.on("recieve_cons_message", (messageObject) => {
      dispatch(addConsMessage(messageObject));
      setStateForScroll(messageObject.message);
    });
  }, [socket]);

  useEffect(() => {
    const chatArray = userConsInfo?.chat?.chatsArray;
    dispatch(addConvoArray(chatArray));
    if (userConsInfo?.chat?.conversationId) {
      const convo = userConsInfo?.chat?.conversationId;
      setConvoId(convo);
      (async () => await socket.emit("join_room", convo))();
    }
  }, []);

  function useChatScroll(dep) {
    const ref = useRef();
    useEffect(() => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, [dep]);
    return ref;
  }

  const keypress = (e) => {
    if (e.key === "Enter") {
      sendText(e);
    }
  };

  const sendText = (event) => {
    event.preventDefault();
    if (text) {
      const messageObject = {
        convoId: convoId,
        message: text,
        sender: "user",
        time: new Date().toString(),
      };
      try {
        socket.emit("send_cons_message", messageObject);
        dispatch(addConsMessage(messageObject));
        setStateForScroll(text);
        setText("");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <div className="card">
        <div className="card-body pb-0">
          <div className="live_chat">
            <div className="live_chat_title">
              <h3 className="common_title">Live Chat</h3>
            </div>
            <div ref={ref} className="overflow_scroll">
              <div className="chat chat_inner">
                {conversation?.length > 0 &&
                  conversation?.map((msg, i) => {
                    return msg?.sender === "user" ? (
                      <div key={i} className="right_chat mt-2">
                        {/* <textarea
                          readOnly
                          value={msg?.message}
                          className="small_parah color_grey"
                        ></textarea> */}
                        <p className="small_parah color_grey">{msg?.message}</p>
                      </div>
                    ) : (
                      <div key={i} className="left_chat mt-2">
                        {/* <textarea
                          readOnly
                          value={msg?.message}
                          className="small_parah color_grey"
                        ></textarea> */}
                        <p className="small_parah color_grey">{msg?.message}</p>
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="chat_send">
              <form onSubmit={sendText}>
                <div className="d-flex justify-content-between">
                  <textarea
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type here..."
                    className="form-control chat_text"
                    value={text}
                    onKeyDown={keypress}
                  ></textarea>
                  <input type="submit" name="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row">
       <div className="col-lg-7">
       </div> */}
      {/* <div className="col-lg-5 upcoming_consultation join_call_notes">
        <div className="card">
          <div className="card-body">
            <div className="consulatation_card">
              <div className="upcoming_con_title">
                <h3 className="common_title">Consultation Notes</h3>
                <p>Notes from Doctor</p>
              </div>
              <p className="mb-3">{userConsInfo?.cons?.fromDoctor}</p>
            </div>
            <div className="consulatation_card ">
              <div className="upcoming_con_title ">
                <p>For Doctor</p>
              </div>
              <div className="notes prescription_info overflow_scroll">
                <form>
                  <div className="notes notes_input">
                    <textarea
                      value={notes}
                      // onKeyDown={keyPress}
                      onChange={(e) => setNotes(e.target.value)}
                      className="form-control"
                      placeholder="Type any notes here...
                      They will be visible to your doctor before and
                        throughout your consultation."
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
       
     
      </div> */}
      {/* </div> */}
    </div>
  );
};

export default Chat;
