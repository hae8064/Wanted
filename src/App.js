import { useState } from "react";
import Header from "./components/Header/Header";
import MainEventBanner from "./components/MainEventBanner/MainEventBanner";
import Main from "./components/Main/Main";

function App() {
  return (
    <div>
      <Header />
      <MainEventBanner />
      <Main />
    </div>
  );
}

export default App;
