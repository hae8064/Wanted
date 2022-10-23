import React, { useEffect } from "react";
import "./MainEventBanner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function MainEventBanner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: false,
    arrows: true,
    centerMode: true,
    centerPadding: "220px",
    // centerRightPadding: "10px",
    // nextArrow: ,
    // prevArrow: ,
  };

  return (
    <div>
      {/* <div className="sliderImg">
        <div>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1826%2F849c1703.thumb_1006_280.jpg&w=1060&q=100"
            alt="롯데헬스케어"
          />
        </div>

        <div>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1837%2F4259e885.thumb_1006_280.jpg&w=1060&q=100"
            alt="blue배경"
          />
        </div>

        <div>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1834%2F10c87e17.thumb_1006_280.jpg&w=1060&q=100"
            alt="blue배경"
          />
        </div>
      </div> */}

      <Slider {...settings}>
        <div>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1826%2F849c1703.thumb_1006_280.jpg&w=1060&q=100"
            alt="롯데헬스케어"
          />
        </div>

        <div>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1837%2F4259e885.thumb_1006_280.jpg&w=1060&q=100"
            alt="blue배경"
          />
        </div>

        <div>
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fbanners%2F1834%2F10c87e17.thumb_1006_280.jpg&w=1060&q=100"
            alt="blue배경"
          />
        </div>
      </Slider>
    </div>
  );
}

const Next = () => {
  <>
    <div></div>
  </>;
};

const Prev = () => {
  <>
    <div></div>
  </>;
};

export default MainEventBanner;
