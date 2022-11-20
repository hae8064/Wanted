import { useState } from 'react';
import Header from './components/Common/Header/Header';
import MainEventBanner from './components/MainPage/MainEventBanner/MainEventBanner';
import Main from './components/MainPage/Main/Main';
import FooterEventBanner from './components/MainPage/FooterEventBanner/FooterEventBanner';
import Recruit from './components/MainPage/Recruit/Recruit';
import Footer from './components/Common/Footer/Footer';
import DevHeader from './components/DevelopPage/Header/DevHeader.jsx';
import Bookmark from './components/DevelopPage/Bookmark/Bookmark';
import GridContainer from './components/DevelopPage/GridContainer/GridContainer';
import DetailRecruitContainer from './components/DetailRecruit/DetailRecruitContainer';
import LoginModal from './components/Common/loginModal/LoginModal';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import SignUpModal from './components/Common/SignUpModal/SignUpModal';
import MainContainer from './components/MainPage/MainContainer';
import DevelopContainer from './components/DevelopPage/DevelopContainer';
import NaverMapContainer from './components/DetailRecruit/DetailMap/NaverMap';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import SearchResult from './components/Common/SearchResult/SearchResult';
import Password from './components/Common/PasswordModal/Password';
import BookMark from './components/Common/BookMark/BookMark';
import { useMediaQuery } from 'react-responsive';
import TabletHeader from './components/Common/Header/TabletHeader';

function App() {
  //반응형 웹
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const [on, setOn] = useState('off');
  const [off, setOff] = useState('off');

  //로그인 모달창 on/off state
  const [loginModal, setLoginModal] = useState(0);

  //로그인 유무 Header Props전달
  const [headerLogin, setHeaderLogin] = useState(false);

  const location = useLocation();

  const offLoginModal = (e) => {
    console.log(e);
  };

  return (
    <div>
      {/* 테블릿 사이즈 반응형 */}
      {isTablet && (
        <TabletHeader
          setOn={setOn}
          getLoginModal={setLoginModal}
          setHeaderLogin={headerLogin}
          setHeaderLogout={setHeaderLogin}
        />
      )}

      {isPc && (
        <Header
          setOn={setOn}
          getLoginModal={setLoginModal}
          setHeaderLogin={headerLogin}
          setHeaderLogout={setHeaderLogin}
        />
      )}

      {isMobile && (
        <TabletHeader
          setOn={setOn}
          getLoginModal={setLoginModal}
          setHeaderLogin={headerLogin}
          setHeaderLogout={setHeaderLogin}
        />
      )}

      {/* <LoginModal /> */}
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/detailRecruit/:id" element={<DetailRecruitContainer />} />
        {on === 'on' ? (
          <Route
            path="/login"
            element={
              <LoginModal
                offLoginModal={offLoginModal}
                containerState={setOn}
              />
            }
          />
        ) : (
          <Route path="/login" element={<LoginModal containerState={off} />} />
        )}

        <Route path="/signUp" element={<SignUpModal />} />
        <Route path="/developPage" element={<DevelopContainer />} />
        <Route
          path="/naverMap"
          element={
            <RenderAfterNavermapsLoaded
              ncpClientId={process.env.REACT_APP_NAVER_MAP_API_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
              error={<p>Maps Load Error</p>}
              loading={<NaverMapContainer />}
            ></RenderAfterNavermapsLoaded>
          }
        />
        <Route path={`/search/:id`} element={<SearchResult />} />
        <Route path="/bookmark" element={<BookMark />} />
      </Routes>

      {/* 모달창 loginModal 기본 0 로그인 1 회원가입 2 비밀번호 3*/}
      {console.log('잘 로그인 되었는가.' + headerLogin)}
      {loginModal === 1 ? (
        <LoginModal modalOn={setLoginModal} />
      ) : loginModal === 2 ? (
        <SignUpModal modalOn={setLoginModal} />
      ) : loginModal === 3 ? (
        <Password modalOn={setLoginModal} setHeaderLogin={setHeaderLogin} />
      ) : null}

      {/* main 페이지 */}
      {/* <Header />
      <MainEventBanner />
      <Main />
      <FooterEventBanner />
      <Recruit />
      <Footer /> */}

      {/* Develop Page */}
      {/* <Header />
      <DevHeader />
      <Bookmark />
      <GridContainer /> */}

      {/* 채용공고 상세페이지 */}
      {/* <DetailRecruitContainer /> */}
      {/* {login ? <LoginModal /> : <DetailRecruitContainer />} */}
    </div>
  );
}

export default App;
