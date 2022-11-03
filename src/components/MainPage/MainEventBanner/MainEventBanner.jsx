import React, { useEffect } from "react";
import "./MainEventBanner.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../../../assets/SlickButtons";

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
    nextArrow: <SamplePrevArrow className="slick-prev2" />,
    prevArrow: <SampleNextArrow />,
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

      <svg class="mainSlideSvgLeft" viewBox="0 0 18 18">
        <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
      </svg>
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
      <svg class="mainSlideSvgRight" viewBox="0 0 18 18">
        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
      </svg>
    </div>
  );
}

export default MainEventBanner;
