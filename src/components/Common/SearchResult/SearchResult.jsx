import React, { useEffect, useState } from "react";
import "./SearchResult.css";
import dummy from "../../../db/data.json";
import { Link, useLocation, useParams } from "react-router-dom";

const SearchResult = ({ title }) => {
  let pathName = window.location.pathname.split("/")[2];
  const decodeUrl = decodeURI(pathName);

  const [searchCount, setSearchCount] = useState(0);
  const [searchView, setSearchView] = useState(false);

  const result = dummy.developGridContainer
    .filter((search) => {
      return (
        search.gridTitle.includes(decodeUrl) ||
        search.gridTitle2.includes(decodeUrl) ||
        search.region.includes(decodeUrl) ||
        search.country.includes(decodeUrl) ||
        search.price.includes(decodeUrl)
      );
    })
    .map((search) => (
      <Link
        key={search.id}
        to={`/detailRecruit/${search.id}`}
        className="gridContainerFirst"
      >
        <header>
          <svg
            class="bookmarkButton"
            width="22"
            height="22"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="https://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.58065 1C3.25997 1 3 1.26206 3 1.58533V16.4138C3 16.8632 3.48164 17.145 3.86873 16.922L9.00004 13.9662L14.1313 16.922C14.5184 17.145 15 16.8632 15 16.4138V1.58533C15 1.26206 14.74 1 14.4194 1H9.00004H3.58065ZM8.71195 12.7838C8.89046 12.681 9.10961 12.681 9.28812 12.7838L13.8387 15.4052V2.17067H9.00004H4.1613V15.4052L8.71195 12.7838Z"
              fill="white"
            ></path>
            <path
              d="M9.28812 12.7838C9.10961 12.681 8.89046 12.681 8.71195 12.7838L4.1613 15.4052V2.17067H9.00004H13.8387V15.4052L9.28812 12.7838Z"
              fill="black"
              fill-opacity="0.25"
            ></path>
          </svg>
          <img src={search.img} alt="" />
        </header>
        <footer>
          <span class="gridTitle">{search.gridTitle}</span>
          <span class="gridTitle2">{search.gridTitle2}</span>
          <button class="gridButton">
            <span>{search.gridButton}</span>
          </button>
          <span class="gridTitle3">
            {search.region} <span class="addressDot">.</span>{" "}
            <span>{search.country}</span>
          </span>
          <span class="gridTitle4">
            채용보상금{" "}
            {search.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
          </span>
        </footer>
      </Link>
    ));

  console.log(decodeUrl);
  return (
    <div className="searchResultContainer">
      <div className="searchTop">
        <button className="searchTopButton">{decodeUrl}</button>
      </div>
      <div className="searchBottomContainer">
        <div className="positionTop">
          <div className="searchPositionText">포지션</div>
          <div className="searchPositionCount">{}</div>
        </div>
        <div className="positionMiddle">
          <div class="headerMiddlePosition">
            <div class="headerFilter">
              <button class="headerRegion">
                <span class="headerRegionLeft">지역</span>
                <span class="headerRegionRight">한국</span>
                <span class="headerRegionRightOne">1</span>
              </button>
              <button class="headerOld">
                <span class="headerRegionLeft">경력</span>
                <span class="headerRegionRight">전체 </span>
                <svg
                  width="8"
                  height="7"
                  viewBox="0 0 8 7"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                    fill="#333333"
                  ></path>
                </svg>
              </button>
              <button class="headerStack">
                <span class="headerRegionLeft">기술스택 </span>
                <svg
                  width="8"
                  height="7"
                  viewBox="0 0 8 7"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                    fill="#333333"
                  ></path>
                </svg>
              </button>
            </div>

            <div class="headerFilterRight">
              <button class="headerFilterRightButton">
                <span class="headerFilterRightText">응답률순</span>
                <svg
                  width="8"
                  height="7"
                  viewBox="0 0 8 7"
                  fill="none"
                  xmlns="https://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33334 0.494202C7.85691 0.494202 8.14842 1.1611 7.82205 1.61224L4.50038 6.20371C4.25071 6.54882 3.77503 6.54971 3.5243 6.20554L0.179295 1.61408C-0.149094 1.16332 0.14211 0.494202 0.666672 0.494202H7.33334Z"
                    fill="#333333"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <p className="headerMiddleP"></p>

          <div class="headerBottom">
            <div class="BottomSlickTrack">
              <button class="manyleftButton">
                <svg
                  class="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                </svg>
              </button>
              <button class="BottomTrack1">
                <span class="BottomTrackText">연봉이 최고의 복지</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="BottomTrack2">
                <span class="BottomTrackText">재택근무</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="BottomTrack3">
                <span class="BottomTrackText">퇴사율 10% 이하</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="BottomTrack4">
                <span class="BottomTrackText">급성장 중</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="BottomTrack5">
                <span class="BottomTrackText">병역특례</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="BottomTrack6">
                <span class="BottomTrackText">50인 이하</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="BottomTrack1">
                <span class="BottomTrackText">50인 이상</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="BottomTrack1">
                <span class="BottomTrackText">업력 5년 이상</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="BottomTrack1">
                <span class="BottomTrackText">유연근무</span>
                <img
                  src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                  alt=""
                />
              </button>
              <button class="manyRightButton">
                <svg
                  class="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 그리드 컨테이너 */}

      <div className="positionGrid">
        {/* 조건문에 따라 filter logic */}
        {result.length > 0 ? (
          result
        ) : (
          <h2 className="searchResultNot">검색결과가 없습니다.</h2>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
