import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './TabletHeader.css';
import { ReactComponent as SearchIcon } from '../../../assets/icon-search.svg';
import { ReactComponent as SearchIcon2 } from '../../../assets/icon-search2.svg';
import { ReactComponent as AlarmIcon } from '../../../assets/alarmButton.svg';
import { ReactComponent as MenuIcon } from '../../../assets/menuIcon.svg';
import DevHeader from '../../DevelopPage/Header/DevHeader';
function TabletHeader({
  setOn,
  getLoginModal,
  setHeaderLogin,
  setHeaderLogout,
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
      <div className="headerTablet">
        <div className="logowantedTablet">
          <div className="logoLeftTablet">
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

            <Link
              className="wantedTitle"
              to={'/'}
              aria-label="home link"
              data-attribute-id="gnb"
              data-gnb-kind="home"
            >
              <i className="icon-logo_new"></i>
            </Link>
          </div>

          <div className="logoRightTablet">
            <button className="signUpTablet">회원가입하기</button>
          </div>
        </div>

        <div className="headerBottomTablet">
          <div className="headerBottomTabletLeft">
            <ul className="headermenuTablet">
              <Link className="recruit2" to="">
                채용
              </Link>
              <Link className="event2" to="">
                이벤트
              </Link>
              <Link className="partpay2" to="">
                직군별 연봉
              </Link>
              <Link className="jobpaper2" to="">
                이력서
              </Link>
              <Link className="community2" to="">
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
              </Link>

              <Link className="freejob2" to="">
                프리랜서
              </Link>
              <Link className="aipass2" to="">
                <span>AI 합격예측</span>

                {/* svg넣기 */}
                <SearchIcon className="aiPassIconTablet" />
              </Link>
            </ul>
          </div>

          <div className="headerBottomTabletRight">
            <div className="searchIconHeader" onClick={() => setSearchOn(true)}>
              <SearchIcon2 />
            </div>
            <button className="MenuTablet">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>

      {/* 개발 파트 부분 넣기 */}
    </>
  );
}

export default TabletHeader;
