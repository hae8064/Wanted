import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchIcon } from '../../../assets/icon-search.svg';
import { ReactComponent as SearchIcon2 } from '../../../assets/icon-search2.svg';
import { ReactComponent as AlarmIcon } from '../../../assets/alarmButton.svg';
import LoginModal from '../loginModal/LoginModal';
import Hamburger from './Hamburger';
import './Header.css';
import HeaderSearch from './HeaderSearch';
import { useRef } from 'react';
function Header({
  setOn,
  getLoginModal,
  setHeaderLogin,
  setHeaderLogout,
  userProfile,
}) {
  const [login, setLogin] = useState(false);

  const [hamhover, setHamHover] = useState(false);

  const [searchOn, setSearchOn] = useState(false);

  const [loginModalOn, setLoginModalOn] = useState(1);

  const [profilePopUp, setProfilePopUp] = useState('off');

  const refLogoutContainer = useRef(null);

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

  //프로필 버튼 클릭시
  const onProfileButton = () => {
    setProfilePopUp('on');
  };

  const onLogout = () => {
    localStorage.removeItem('id');
    setHeaderLogout(false);
  };

  /* 외부 영역을 클릭했을 때 검색창이 닫히도록 */
  useEffect(() => {
    function handleOutside(e) {
      // current.contains(e.target) : 컴포넌트 특정 영역 외 클릭 감지를 위해 사용
      if (
        refLogoutContainer.current &&
        !refLogoutContainer.current.contains(e.target)
      ) {
        setProfilePopUp('off');
        changeSearchOn();
        console.log('close');
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
    };
  }, [refLogoutContainer]);

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
          <Link className="jobpaper" to="/recruitPage">
            이력서
          </Link>
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
          {setHeaderLogin === true ||
          localStorage.getItem('id') === 'lbh8064@naver.com' ? (
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
                <button className="profileButton" onClick={onProfileButton}>
                  {localStorage.getItem('profileImg') ? (
                    <img
                      className="IconProfile"
                      src={localStorage.getItem('profileImg')}
                      alt="카톡프로필"
                    />
                  ) : (
                    <img
                      className="IconProfile"
                      src="imgs/profileIcon.png"
                      alt="프로필"
                    />
                  )}
                </button>
              </div>
              <div
                className={'profileUl' + profilePopUp}
                ref={refLogoutContainer}
              >
                <ul className="profileContainer">
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="profileLi">
                      <span>MY 원티드</span>
                    </li>
                  </Link>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="profileLiProfile">프로필</li>
                  </Link>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="profileLi">지원 현황</li>
                  </Link>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="profileLi">제안받기 현황</li>
                  </Link>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="profileLi">좋아요</li>
                  </Link>
                  <Link to="/bookmark" style={{ textDecoration: 'none' }}>
                    <li className="profileLiBookMark">북마크</li>
                  </Link>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="profileLi">추천</li>
                  </Link>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="profileLi">포인트</li>
                  </Link>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                    <li className="profileLogout" onClick={onLogout}>
                      로그아웃
                    </li>
                  </Link>
                </ul>
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
