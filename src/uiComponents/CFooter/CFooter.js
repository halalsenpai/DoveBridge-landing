import React from "react";

const CFooter = () => {
  return (
    <div className="c-footer">
      <span className="shadow-box"></span>
      <div className="footer">
        <div className="container">
          <div className="footer-wrap">
            <img src={require("../../assets/images/logo.svg")} alt="" />
            <div className="footer-text">
              DoveBridge is a posthumous message delivery platform that lets you connect with your loved ones long after
              you have passed away.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CFooter;
