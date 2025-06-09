import React from "react";
import { useDispatch } from "react-redux";
import { maxChat } from "../../../Redux/Reducers/chatSlice";

const MinChat = ({ onlineUsers }) => {
  const dispatch = useDispatch();
  return (
    <div className="z-index1 minimize_chat card">
      <div className="card-body p-3">
        <div className=" p-0 border-0 d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <h4 className="title_text mb-0">James Pearlman</h4>
            {onlineUsers?.findIndex((item) => item.userId == "doctor") != -1 ? (
              <div class="online-status">
                <span class="dot-green"></span>
                Online
              </div>
            ) : null}
          </div>
          <div onClick={() => dispatch(maxChat())} className="maximize_img">
            <img src={require("../../../assets/images/maximize_icon.png")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MinChat;
