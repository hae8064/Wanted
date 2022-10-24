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

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div>
      <Header />

      {/* <LoginModal /> */}
      <Routes>
        <Route path="/" element={<DetailRecruitContainer />} />
        <Route path="/login" element={<LoginModal />} />
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
