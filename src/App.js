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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpModal from './components/Common/SignUpModal/SignUpModal';
import MainContainer from './components/MainPage/MainContainer';

function App() {
  const [on, setOn] = useState('on');
  const [off, setOff] = useState('off');

  const offLoginModal = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Header />

      {/* <LoginModal /> */}
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/detailRecruit" element={<DetailRecruitContainer />} />
        {offLoginModal ? (
          <Route
            path="/login"
            element={
              <LoginModal offLoginModal={offLoginModal} containerState={on} />
            }
          />
        ) : (
          <Route path="/login" element={<LoginModal containerState={off} />} />
        )}
        <Route path="/signUp" element={<SignUpModal />} />
      </Routes>
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
