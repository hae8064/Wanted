import { useState } from 'react';
import Header from './components/Header/Header';
import MainEventBanner from './components/MainEventBanner/MainEventBanner';
import Main from './components/Main/Main';
import FooterEventBanner from './components/FooterEventBanner/FooterEventBanner';
import Recruit from './components/Recruit/Recruit';
import Footer from './components/Common/Footer/Footer';

function App() {
  return (
    <div>
      {/* main 페이지 */}
      <Header />
      <MainEventBanner />
      <Main />
      <FooterEventBanner />
      <Recruit />
      <Footer />
    </div>
  );
}

export default App;
