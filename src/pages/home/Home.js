import React from "react";
import Fade from "react-reveal/Fade";

import SignUpForm from "../../uiComponents/SignUpForm/SignUpForm";

function Home() {
  return (
    <div className="home">
      <section id="sec-top">
        <div className="container">
          <div className="text">
            <Fade bottom>
              <div className="text-wrap">
                <div className="title">
                  Everlasting <br /> Love.
                </div>
                <div className="subtitle">
                  DoveBridge is a posthumous message delivery platform that lets you connect with your loved ones long
                  after you have passed away.
                </div>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="img-div">
              <img
                src={require("../../assets/images/woman-praying-free-bird-enjoying-nature-sunset-background-hope-concept_34200-256.png")}
                alt=""
              />
            </div>
          </Fade>
        </div>
      </section>

      <section id="sec-2">
        <div className="container">
          <div className="signup-form">
            <SignUpForm />
          </div>
          <Fade bottom>
            <div className="text">
              <div className="text-wrap">
                <div className="title">The Secure Way to Leave A Digital Legacy</div>
                <div className="subtitle">
                  Unlike other apps, DoveBridge does not hold on to your data. Our cutting-edge security system uses
                  cloud encryption to eliminate any risk to your personal information.
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>

      <section id="sec-1">
        <div className="container">
          <div className="text">
            <div className="btn-wrap">
              <div className="title">Download App</div>

              <Fade bottom>
                <div className="appstore-btn-div">
                  <a href="">
                    <img src={require("../../assets/images/Group 6480.svg")} alt="" />
                  </a>
                  <a href="">
                    <img src={require("../../assets/images/Group 6481.svg")} alt="" />
                  </a>
                </div>
              </Fade>
            </div>
          </div>

          <Fade bottom>
            <div className="img-div">
              <img src={require("../../assets/images/Mask Group 13.svg")} alt="" />
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
export default Home;
