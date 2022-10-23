import React from 'react';
import Header from '../Common/Header/Header';
import DetailGrid from './DetailGrid/DetailGrid';
import './DetailRecruitContainer.css';
import DetailRecruitMain from './DetailRecruitMain/DetailRecruitMain';

function DetailRecruitContainer() {
  return (
    <div className="RecruitContainer">
      <Header />
      <DetailRecruitMain />
    </div>
  );
}

export default DetailRecruitContainer;
