import React from "react";
import { ReactComponent as BookMarkIcon } from "../../../assets/bookmarkWhite.svg";
import { ReactComponent as LinkIcon } from "../../../assets/linkIcon.svg";
import "./DetailMainRight.css";
const DetailMainRight = () => {
  return (
    <div className="mainRight">
      <div class="mainRightTop">
        <span class="mainRightTitle">채용보상금</span>
        <button class="mainRightTitleButton">
          <LinkIcon />
        </button>
      </div>
      <div class="mainRightMiddle">
        <div class="mainRightMiddleLeft">
          <span class="mainRightMiddleLeftTitle">추천인</span>
          <span class="mainRightMiddleLeftSub">500,000원</span>
        </div>
        <div class="mainRightMiddleRight">
          <span class="mainRightMiddleLeftTitle">지원자</span>
          <span class="mainRightMiddleLeftSub">500,000원</span>
        </div>
      </div>
      <div class="mainRightButtons">
        <button class="RightTopButton">
          <span>
            <BookMarkIcon />
          </span>
          <span>북마크하기</span>
        </button>
        <button class="RightbottomButton">
          <span>지원하기</span>
        </button>
      </div>
      <div class="mainRightBottoms">
        <button class="heartNumber">
          <i class="fa-duotone fa-heart">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M64 288L39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8L256 96l24.2-24.2c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 36-14.3 70.5-39.8 96L448 288 256 480 64 288z" />
            </svg>
          </i>
          <i class="icon-ic_favorite_black_24px"></i>
          <span>9</span>
        </button>
        <button class="profilesButton2">
          <ul>
            <li>
              <img
                class="profilesButtonimg1"
                src="https://lh3.googleusercontent.com/a/AATXAJyptvBO9pOC55mAwO0IA3-llT_OIJ3QyPcS1-DN=s96-c"
                alt=""
              />
            </li>
            <li>
              <img
                class="profilesButtonimg2"
                src="https://lh3.googleusercontent.com/a/AATXAJyptvBO9pOC55mAwO0IA3-llT_OIJ3QyPcS1-DN=s96-c"
                alt=""
              />
            </li>
            <li>
              <img
                class="profilesButtonimg3"
                src="https://lh3.googleusercontent.com/a-/AFdZucpeMgi75tJZTBYFdjv5JpLmrXcpc4EGX_cwK-GT=s96-c"
                alt=""
              />
            </li>
          </ul>
        </button>
      </div>
    </div>
  );
};

export default DetailMainRight;
