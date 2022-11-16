import React from 'react';
import BasicExample from '../../Common/BootstrapAccordion/Accordion';
import './DetailMapBottom.css';

const DetailMapBottom = () => {
  return (
    <div className="detailBottomMapContainer">
      <div className="bottomBanner">
        <div className="bottomBannerLeftContainer">
          <div className="bottomBannerLogo">
            <img
              src="https://static.wanted.co.kr/images/wdes/0_5.0852ff23.jpg"
              alt=""
            />
          </div>
          <div className="bottomBannerText">
            <span className="firstText">블루비커</span>
            <span className="firstSubText">IT, 컨텐츠</span>
          </div>
        </div>
        <div className="bottomBannerButton">
          <button>팔로우</button>
        </div>
      </div>

      <BasicExample />
    </div>
  );
};

export default DetailMapBottom;
