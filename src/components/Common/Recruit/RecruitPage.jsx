import React from 'react';
import './RecruitPage.css';

const RecruitPage = () => {
  return (
    <div className="recruitPageContainer">
      <div className="topRecruitPage">
        <div
          className="eventBannerContainer"
          style={{
            backgroundImage: `Url("https://static.wanted.co.kr/career_connect/banner-back-pc-common.png")`,
          }}
        >
          <button className="recruitEventBanner">
            <div className="EventBannerButtonDiv">
              <p>이력서 작성이 쉬워진다! 1분 만에 채워지는 경력정보</p>
              <img
                className="buttonDivImg"
                src="https://static.wanted.co.kr/career_connect/trio.webp"
                alt="career-connect-icon"
              />
              <strong>내 경력 불러오기</strong>
            </div>
          </button>
        </div>
      </div>
      <div className="bottomRecruitPage">
        <div className="bottomRecruitLeft">최근 문서</div>
        <div className="bottomRecruitRight">원티드 이력서 소개</div>
      </div>
      <div className="bottomFileUpload">
        <div className="newRecruit"></div>
        <div className="newFileUpload"></div>
      </div>
    </div>
  );
};

export default RecruitPage;
