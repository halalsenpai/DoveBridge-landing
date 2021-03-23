import { Carousel } from "antd";
import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block" }} onClick={onClick} />;
}

const CSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    easing: "ease",
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider className="slider" {...settings}>
      <div>
        <h3>
          In the digital age, no commodity is more valuable to companies than user data. Detailing everything from your
          age to your shopping preferences, data is seen by many as the key to manipulating consumer behaviour.
        </h3>
      </div>
      <div>
        <h3>
          As a result, data is being sold off to the highest bidder by companies, websites and applications across the
          globe. If you have a social media profile, an online shopping account or pretty much any other kind of web
          footprint, chances are that your data has been used to personalise your experience.
        </h3>
      </div>
      <div>
        <h3>
          Whilst seemingly innocuous, the truth is that commodifying data in this way can leave your personal
          information at high risk of exposure.
        </h3>
      </div>
      <div>
        <h3>
          As the world’s most secure way to leave a digital legacy, DoveBridge does not hold on to a single piece of our
          users’ data. Unlike other apps that store your information in a database, often selling it on at a profit, we
          respect and promote our users’ right to privacy.
        </h3>
      </div>
      <div>
        <h3>
          At DoveBridge, we use high-end security concepts to protect your information, holding everything in the cloud
          where it is protected by end to end encryption. As a result, neither we nor anybody else can view a single
          shred of your data.
        </h3>
      </div>
      <div>
        <h3>
          So, how does it all work? It’s really quite simple. When you upload images, videos, text or any other
          information to DoveBridge, it is instantly transformed into an encrypted form of data that is impossible to
          read. Then, it gets uploaded to a decentralised database in the cloud, where it lives blissfully free from
          harm or interference.
        </h3>
      </div>
      <div>
        <h3>
          We make your security a top priority at DoveBridge due to the sensitive nature of the information uploaded
          onto our app. By protecting all data with cloud encryption technology, we ensure that your digital legacy is
          accessed only by those for whom it is intended.
        </h3>
      </div>
    </Slider>
  );
};

export default CSlider;
