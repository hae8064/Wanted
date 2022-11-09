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

function App() {
  const [on, setOn] = useState('off');
  const [off, setOff] = useState('off');

  //로그인 모달창 on/off state
  const [loginModal, setLoginModal] = useState(0);
  const location = useLocation();

  const offLoginModal = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Header setOn={setOn} getLoginModal={setLoginModal} />
      {console.log(loginModal)}
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
      </Routes>

      {/* 모달창 loginModal 기본 0 로그인 1 회원가입 2 비밀번호 3*/}
      {loginModal === 1 ? (
        <LoginModal modalOn={setLoginModal} />
      ) : loginModal === 2 ? (
        <SignUpModal modalOn={setLoginModal} />
      ) : loginModal === 3 ? (
        <Password modalOn={setLoginModal} />
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
