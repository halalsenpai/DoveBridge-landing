import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import CButton from "../shared/CButton/CButton";

const CHeader = () => {
  return (
    <div className="c-header ">
      <nav className="navbar navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand title" href="#">
            <img
              src={require("..//../assets/images/logo-icon.svg")}
              alt=""
              width="40"
              height="40"
              className="d-inline-block align-top mr-1"
            />
            DoveBridge
          </a>
          <div className="signup-btn">
            <CButton href="#sec-2" type="small" themeColor="primary">
              <Link smooth={true} duration={500} to="sec-2">
                {" "}
                SignUp
              </Link>
            </CButton>
          </div>
        </div>
        <span className="shadow-box"></span>
      </nav>
    </div>
  );
};

export default CHeader;
