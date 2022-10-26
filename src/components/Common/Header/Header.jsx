import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../assets/icon-search.svg';
import { ReactComponent as SearchIcon2 } from '../../../assets/icon-search2.svg';
import LoginModal from '../loginModal/LoginModal';
import Hamburger from './Hamburger';
import './Header.css';

function Header({ setOn }) {
  const [login, setLogin] = useState(false);

  const [hamhover, setHamHover] = useState(false);

  const doLogin = () => {
    setLogin(!login);
    // console.log(setLoginModal);
  };

  return (
    <>
      <div className="header">
        <div className="logowanted">
          <button
            onMouseEnter={() => {
              setHamHover(true);
            }}
            className="hamburgerbar"
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
          >
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&w=undefined&q=75"
              // style="width: 17px; height: 14px; object-fit: contain"
              alt="hamburgerbar"
            />
          </button>

          <a
            className="wantedTitle"
            href="/"
            aria-label="home link"
            data-attribute-id="gnb"
            data-gnb-kind="home"
          >
            <i className="icon-logo_new"></i>
          </a>
        </div>

        <ul className="headermenu">
          <a className="recruit" href="">
            채용
          </a>
          <a className="event" href="">
            이벤트
          </a>
          <a className="partpay" href="">
            직군별 연봉
          </a>
          <a className="jobpaper" href="">
            이력서
          </a>
          <a className="community" href="">
            <span>커뮤니티</span>
            <em>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
              >
                <g
                  fill="none"
                  fill-rule="evenodd"
                  font-family="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                  font-size="9"
                  font-weight="500"
                >
                  <g fill="#36F">
                    <g>
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                  <tspan x="0" y="8">
                                    New
                                  </tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </em>
          </a>

          <a className="freejob" href="">
            프리랜서
          </a>
          <a className="aipass" href="">
            <span>AI 합격예측</span>

            {/* svg넣기 */}
            <SearchIcon />
          </a>
        </ul>

        <div className="headerRight">
          {/* svg넣기 */}
          <SearchIcon2 />

          <Link to="/login">
            <button className="login" onClick={() => setOn('on')}>
              회원가입/로그인
            </button>
          </Link>
          <a className="companyService">기업 서비스</a>
        </div>
      </div>
      <Hamburger setHamHover={setHamHover} view={hamhover ? 'on' : 'off'} />
    </>
  );
}

export default Header;
