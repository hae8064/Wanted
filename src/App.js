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

function App() {
  return (
    <div>
      {/* main 페이지 */}
      {/* <Header />
      <MainEventBanner />
      <Main />
      <FooterEventBanner />
      <Recruit />
      <Footer /> */}

      {/* Develop Page */}
      <Header />
      <DevHeader />
      <Bookmark />
      <GridContainer />
    </div>
  );
}

export default App;
