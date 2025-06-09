import React from "react";
import close from "../../../assets/images/icons/close.svg";

const NeedAssist = ({ handleCloseBtn, handleStart }) => {
  return (
    <div className="card assistance">
      <div className="card-body">
        <div className="assistance_box">
          <img
            onClick={handleCloseBtn}
            className="text-end assist_cross_button"
            src={close}
            alt="Close"
          />

          <h3>Need assistance? </h3>
          <p>Instant message one of our team</p>
          <button onClick={handleStart} className="btn small_dark_btn">
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeedAssist;
