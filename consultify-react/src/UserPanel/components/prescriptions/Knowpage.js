import React from "react";

const knowPage = () => {
  return (
    <div className="advertisement_info">
      <div className="ad-title">
        <h3>Did You know? </h3>
        <p className="text-center">
          Bleeding Gums are the leading cause of tooth loss in the UK?
        </p>
      </div>
      <img
        src={require("../../../assets/images/advertisement/ad-1.png")}
        alt="advertisement"
        className="img-fluid"
      />
    </div>
  );
};

export default knowPage;
