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
    <div class={isPc ? 'main' : 'mainTablet'}>
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

      <div class="devMainTitle">
        <h3 className="devMainTitleH3">적극 채용 중인 회사</h3>
      </div>

      <div class={isPc ? 'mainTopImgs' : 'mainTopImgsTablet'}>
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
