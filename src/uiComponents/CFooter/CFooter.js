import React from "react";

const CFooter = () => {
  return (
    <div className="c-footer">
      <span className="shadow-box"></span>
      <div className="footer">
        <div className="container">
          <div className="footer-wrap">
            <div className="d-flex align-items-center mb-2">
              <img className="mr-2 logo" src={require("../../assets/images/DoveBridge_Icon.png")} alt="" />
              <div className="logo-text">DoveBridge</div>
            </div>
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
