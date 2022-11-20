import React from 'react';
import './Bookmark.css';
import { ReactComponent as BookmarkIcon } from '../../../assets/bookmark.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { useMediaQuery } from 'react-responsive';

function Bookmark() {
  // 반응형 웹
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  return (
    // <div class={isPc ? 'main' : 'mainTablet'}>
    <div class={isPc ? 'main' : isTablet ? 'mainTablet' : 'mainMobile'}>
      <div className="mobileBookTop">
        <button class="mainBookMark">
          <BookmarkIcon />
          <span>북마크 모아보기</span>
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path
              fill="currentColor"
              d="M4.22 9.72a.75.75 0 001.06 1.06l4.25-4.25a.75.75 0 000-1.06L5.28 1.22a.75.75 0 00-1.06 1.06L7.94 6 4.22 9.72z"
            ></path>
          </svg>
        </button>

        {isMobile && (
          <button className="headerFilterRightButtonMobile">
            <span className="headerFilterRightTextMobile">응답률순</span>
            <svg
              width="8"
              height="7"
              viewBox="0 0 8 7"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path
                d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                fill="#333333"
              ></path>
            </svg>
          </button>
        )}
      </div>

      <div class="devMainTitle">
        <h3 className="devMainTitleH3">적극 채용 중인 회사</h3>
      </div>

      <div class={isPc ? 'mainTopImgs' : 'mainTopImgsTablet'}>
        {/* <div class={isPc ? 'mainTopImgs' : isTa}> */}
        <a href="/" class="topImgsContainer">
          <header>
            <div class="companyBg">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8681%2Fnfnaa497atbuwdq9__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
          </header>
          <footer>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.be2fa11f.jpg&w=100&q=75"
              alt=""
            />
            <div class="mainTopText">
              <h4 className="mainTopTextH4">케이에이치(시너지타워)</h4>
              <h5 className="mainTopTextH5">11개 포지션</h5>
            </div>
          </footer>
        </a>
        <a href="/" class="topImgsContainer">
          <header>
            <div class="companyBg">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8681%2Fnfnaa497atbuwdq9__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
          </header>
          <footer>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.be2fa11f.jpg&w=100&q=75"
              alt=""
            />
            <div class="mainTopText">
              <h4 className="mainTopTextH4">케이에이치(시너지타워)</h4>
              <h5 className="mainTopTextH5">11개 포지션</h5>
            </div>
          </footer>
        </a>
        <a href="/" class="topImgsContainer">
          <header>
            <div class="companyBg">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8681%2Fnfnaa497atbuwdq9__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
          </header>
          <footer>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.be2fa11f.jpg&w=100&q=75"
              alt=""
            />
            <div class="mainTopText">
              <h4 className="mainTopTextH4">케이에이치(시너지타워)</h4>
              <h5 className="mainTopTextH5">11개 포지션</h5>
            </div>
          </footer>
        </a>
        <a href="/" class="topImgsContainer">
          <header>
            <div class="companyBg">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8681%2Fnfnaa497atbuwdq9__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
          </header>
          <footer>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.be2fa11f.jpg&w=100&q=75"
              alt=""
            />
            <div class="mainTopText">
              <h4 className="mainTopTextH4">케이에이치(시너지타워)</h4>
              <h5 className="mainTopTextH5">11개 포지션</h5>
            </div>
          </footer>
        </a>

        <a href="/" class="topImgsContainer">
          <header>
            <div class="companyBg">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F8681%2Fnfnaa497atbuwdq9__400_400.jpg&w=400&q=75"
                alt=""
              />
            </div>
          </header>
          <footer>
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fwdes%2F0_5.be2fa11f.jpg&w=100&q=75"
              alt=""
            />
            <div class="mainTopText">
              <h4 className="mainTopTextH4">케이에이치(시너지타워)</h4>
              <h5 className="mainTopTextH5">11개 포지션</h5>
            </div>
          </footer>
        </a>
      </div>
    </div>
  );
}

export default Bookmark;
