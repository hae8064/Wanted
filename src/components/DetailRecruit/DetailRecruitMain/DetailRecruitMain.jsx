import React, { useRef, useState } from 'react';
import './DetailRecruitMain.css';
import Slider from 'react-slick';
import { ReactComponent as LinkIcon } from '../../../assets/linkIcon.svg';
import { ReactComponent as BookMarkIcon } from '../../../assets/bookmarkWhite.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function DetailRecruitMain() {
  const setting = {
    dots: true,
    draggable: true,
    slidesToShow: 1,
    // adaptiveHeight: true,
    // scrollbar: true,
    arrow: true,
    infinity: true,
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    //   draggable: true,
    // },
    // prevArrow: "<button type='button' className='slick-prev'></button>", // 이전 화살표 모양 설정
    // nextArrow: "<button type='button' className='slick-next'></button>",
    dotsClass: 'slick-dots',
  };

  return (
    <div className="mainPositionContainer">
      <div className="RecruitConiner">
        <div className="slide2">
          <Slider {...setting}>
            <div class="sliderImg2">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fvym9cwwcigp2tzbi__1080_790.jpg&w=1000&q=75"
                alt="롯데헬스케어"
              />
            </div>
            <div className="sliderImg2">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2Fdvcf627tgxatpg7v__1080_790.jpg&w=1000&q=75"
                alt="blue배경"
              />
            </div>
            <div className="sliderImg2">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22333%2F6kxgpommhvckijjr__1080_790.jpg&w=1000&q=75"
                alt="blue배경"
              />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default DetailRecruitMain;
