import React from "react";
import Fade from "react-reveal/Fade";
import CSlider from "../../uiComponents/CSlider/CSlider";

import SignUpForm from "../../uiComponents/SignUpForm/SignUpForm";

function Home() {
  return (
    <div className="home">
      <section id="sec-top">
        <div className="container">
          <div className="text">
            <Fade bottom>
              <div className="text-wrap">
                <div className="title">Everlasting Love.</div>
                <br />
                <div className="subtitle">
                  DoveBridge is a posthumous message delivery platform that lets you connect with your loved ones long
                  after you have passed away.
                </div>
                <br />
                <div className="subtitle">
                  Through a combination of images, videos, text and more, you can leave behind a rich digital legacy to
                  comfort those closest to you in the weeks, months and years after death
                </div>
                <br />
                <div className="subtitle">
                  With an emphasis on quality, security and sensitivity, DoveBridge takes your love and makes it
                  everlasting.
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

      <section className="slidersection">
        <div className="heading">How DoveBridge keeps your data secure</div>
        <CSlider />
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
                <br />
                <div className="subtitle">
                  As data becomes an increasingly high-value commodity in the digital age,your information is at a
                  higher risk of exposure than ever before.
                </div>
                <br />
                <div className="subtitle">
                  Unlike other apps, DoveBridge does not hold on to your data. Our cutting-edge security system uses
                  cloud encryption to eliminate any risk to your personal information. In fact, even we won't be able to
                  access a single thing you upload!
                </div>
                <br />
                <div className="subtitle">
                  At DoveBridge, we respect and promote our user's right to privacy by making data security a top
                  priority.
                </div>
                <br />
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
