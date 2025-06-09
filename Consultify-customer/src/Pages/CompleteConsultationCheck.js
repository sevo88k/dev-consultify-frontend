import React from "react";
import { useNavigate } from "react-router-dom";

const CompleteConsultationCheck = () => {

    const navigate = useNavigate()
    const userToken = window.localStorage.getItem("accessToken");
  
    const handleClick = () => {
    if(userToken) {
      navigate("/client_view")
    } else{
      navigate("/")
    }
    }
  
  return (
    <>
      <div className="container">
        <div className="verify_email_box">
          <div className="email_box_v">
            <img
              src={require("../assets/img/greenchecked.png")}
              className="img-fluid"
            />
            <p>Form has been Completed.</p>
            <button className="btn btn-link"  style={{ color: "#427272", textDecoration: "none" }} onClick={handleClick}>Back to Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteConsultationCheck;
