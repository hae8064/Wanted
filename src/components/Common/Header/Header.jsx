import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../assets/icon-search.svg';
import { ReactComponent as SearchIcon2 } from '../../../assets/icon-search2.svg';
import { ReactComponent as AlarmIcon } from '../../../assets/alarmButton.svg';
import LoginModal from '../loginModal/LoginModal';
import Hamburger from './Hamburger';
import './Header.css';
import HeaderSearch from './HeaderSearch';
function Header({ setOn, getLoginModal, setHeaderLogin }) {
  const [login, setLogin] = useState(false);

  const [hamhover, setHamHover] = useState(false);

  const [searchOn, setSearchOn] = useState(false);

  const [loginModalOn, setLoginModalOn] = useState(1);

  const doLogin = () => {
    setLogin(!login);
    // console.log(setLoginModal);
  };

  //appjs state props 변경
  const loginChange = () => {
    getLoginModal(loginModalOn);
  };

  const changeSearchOn = () => {
    setSearchOn(false);
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
          <div className="searchIconHeader" onClick={() => setSearchOn(true)}>
            <SearchIcon2 />
          </div>

          {/* <Link to="/login"> */}
          {setHeaderLogin === true ? (
            // <>로그인</>
            <div className="loginLiContainer">
              <div className="alarmContainer">
                <button className="alarmButton">
                  <AlarmIcon />
                </button>
                <span className="Badge_Badge__BJTzL">
                  <svg className="svgN" width="5" height="5" viewBox="0 0 6 6">
                    <g fill="#fff" fill-rule="nonzero">
                      <path
                        d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                        transform="translate(-123 -375) translate(20 365) translate(98 5)"
                      ></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className="loginProfileIcon">
                <button className="profileButton">
                  <img
                    className="IconProfile"
                    src="imgs/profileIcon.png"
                    alt="프로필"
                  />
                </button>
              </div>
            </div>
          ) : (
            <button className="login" onClick={loginChange}>
              회원가입/로그인
            </button>
          )}

          {/* </Link> */}
          <a className="companyService">기업 서비스</a>
        </div>
      </div>
      <Hamburger setHamHover={setHamHover} view={hamhover ? 'on' : 'off'} />
      <HeaderSearch
        on={searchOn ? 'on' : 'off'}
        changeSearchOn={changeSearchOn}
      />
    </>
  );
}

export default Header;
