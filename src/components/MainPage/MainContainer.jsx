import React from "react";
import Footer from "../Common/Footer/Footer";
import FooterEventBanner from "./FooterEventBanner/FooterEventBanner";
import Main from "./Main/Main";
import MainEventBanner from "./MainEventBanner/MainEventBanner";
import Recruit from "./Recruit/Recruit";

const MainContainer = () => {
  return (
    <>
      <MainEventBanner />
      <Main />
      <FooterEventBanner />
      <Recruit />
      <Footer />
    </>
  );
};

export default MainContainer;
