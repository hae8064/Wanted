import React from "react";
import "./EventSliderContainer.css";

const EventSliderContainer = () => {
  return (
    <div className="articleContainer3">
      <div className="articleTop">
        <button className="articleLeftClick">
          <svg className="svgLeftButton" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </button>
        <div className="articleCenterText">
          <h2 className="articleText">커리어 성장을 위한 맞춤 이벤트</h2>
          <a className="articleWhole" href="">
            이벤트 전체보기
            <svg className="svgCenterButton" viewBox="0 0 19 19">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </a>
        </div>
        <button className="contentsRecomment">
          <svg className="svgRightButton" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </button>
      </div>

      <div className="bottomContainer3">
        {/* <Slider {...setting2}> */}
        <div className="articleBottom3">
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2404%2F54ecb586.jpg&w=1200&q=100"
              alt=""
            />
            <span className="EventKind EventKinds_EventKind__eWUu8 is-article">
              <span className="EventKinds_EventKind__text__sYu5A">아티클</span>
            </span>
            <span className="bottom3Title">
              인터뷰 | 여성 IT리더들의 성장 경험을 공유합니다!
            </span>
          </a>
        </div>
        <div className="articleBottom3">
          <a href="">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2404%2F54ecb586.jpg&w=1200&q=100"
              alt=""
            />
            <span className="EventKind EventKinds_EventKind__eWUu8 is-article">
              <span className="EventKinds_EventKind__text__sYu5A">아티클</span>
            </span>
            <span className="bottom3Title">
              인터뷰 | 여성 IT리더들의 성장 경험을 공유합니다!
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventSliderContainer;
