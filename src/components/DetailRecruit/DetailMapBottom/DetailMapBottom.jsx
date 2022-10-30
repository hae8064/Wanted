import React from 'react';
import './DetailMapBottom.css';

const DetailMapBottom = () => {
  return (
    <div className="detailBottomMapContainer">
      <div className="bottomBanner">
        <div className="bottomBannerLeftContainer">
          <div className="bottomBannerLogo">
            <img
              src="https://static.wanted.co.kr/images/wdes/0_5.0852ff23.jpg"
              alt=""
            />
          </div>
          <div className="bottomBannerText">
            <span className="firstText">블루비커</span>
            <span className="firstSubText">IT, 컨텐츠</span>
          </div>
        </div>
        <div className="bottomBannerButton">
          <button>팔로우</button>
        </div>
      </div>

      <div className="bottomBanner2">
        <div className="bottomBanner2Left">
          <span>
            <svg
              className="bottomBanner2svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="currentColor" fill-rule="evenodd">
                <path
                  fill-rule="nonzero"
                  d="M15.266 20.658A9.249 9.249 0 0112 21.25a9.25 9.25 0 010-18.5 9.21 9.21 0 016.54 2.71A9.217 9.217 0 0121.25 12a9.213 9.213 0 01-2.71 6.54.75.75 0 101.061 1.062A10.713 10.713 0 0022.75 12c0-2.89-1.146-5.599-3.149-7.601A10.717 10.717 0 0012 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75c1.31 0 2.591-.235 3.794-.688a.75.75 0 10-.528-1.404z"
                ></path>
                <path d="M13 16a1 1 0 11-2 0 1 1 0 012 0"></path>
                <path
                  fill-rule="nonzero"
                  d="M11.25 7v5a.75.75 0 101.5 0V7a.75.75 0 10-1.5 0z"
                ></path>
              </g>
            </svg>
          </span>
          <span className="bottomBanner2Text">
            본 채용정보는 원티드랩의 동의없이 무단전재, 재배포, 재가공할 수
            없으며, 구직활동 이외의 <br />
            용도로 사용할 수 없습니다.
          </span>
        </div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default DetailMapBottom;
