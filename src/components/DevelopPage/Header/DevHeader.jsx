import React, { useEffect, useMemo, useRef, useState } from 'react';
import Header from '../../Common/Header/Header';
import './DevHeader.css';
import { throttle } from 'lodash';
import { useMediaQuery } from 'react-responsive';

function DevHeader() {
  // 반응형 웹
  const isPc = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  const [scrollEvent, setScrollEvent] = useState(false);

  const onScrollFn = useMemo(
    () =>
      throttle(() => {
        if (window.scrollY > 200) {
          //scroll 높이 200 이상시
          setScrollEvent(true); //useState를 이용해 view컨트롤
        } else {
          setScrollEvent(false);
        }
      }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', onScrollFn);
    return () => {
      //컴포넌트 나갈 떄 작동
      window.removeEventListener('scroll', onScrollFn);
    };
  }, []);

  return (
    <>
      {/* <div className={isPc ? 'headerTitle' : 'headerTitleNoPc'}> */}
      <div
        className={
          isPc
            ? 'headerTitle'
            : isTablet
            ? 'headerTitleNoPc'
            : 'headerTitleMobile'
        }
      >
        <button className="headerTitleLeft">
          <span className="headerTitleLeftText">개발</span>
          <span className="headerTitleLeftContainer">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path
                fill="#767676"
                fill-rule="nonzero"
                d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
              ></path>
            </svg>
          </span>
        </button>

        <div className="headerLine">|</div>

        <button className="headerTitleRight">
          <span className="headerTitleRightText">개발 전체</span>
          <span className="headerTitleRightContainer">
            <svg
              xmlns="https://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
            >
              <path
                fill="#767676"
                fill-rule="nonzero"
                d="M2.28 3.22a.75.75 0 0 0-1.06 1.06l4.25 4.25a.75.75 0 0 0 1.06 0l4.25-4.25a.75.75 0 0 0-1.06-1.06L6 6.94 2.28 3.22z"
              ></path>
            </svg>
          </span>
        </button>
      </div>

      {/* <div className={isPc ? 'headerContainerSti' : 'headerContainerStiNoPc'}> */}
      <div
        className={
          isPc
            ? 'headerContainerSti'
            : isTablet
            ? 'headerContainerStiNoPc'
            : 'headerContainerStiMobile'
        }
      >
        {/* <div className={isPc ? 'headerMiddle' : 'headerMiddleNoPc'}> */}
        <div
          className={
            isPc
              ? 'headerMiddle'
              : isTablet
              ? 'headerMiddleNoPc'
              : 'headerMiddleMobile'
          }
        >
          <div className="headerFilter2">
            <button className="headerRegion">
              <span className="headerRegionLeft">지역</span>
              <span className="headerRegionRight">한국</span>
              <span className="headerRegionRightOne">1</span>
            </button>
            <button className="headerOld">
              <span className="headerRegionLeft">경력</span>
              <span className="headerRegionRight">전체 </span>
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
            <button className="headerStack">
              <span className="headerRegionLeft">기술스택 </span>
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

          <div className="headerFilterRight">
            <button className="headerFilterRightButton">
              <span className="headerFilterRightText">응답률순</span>
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

        {/* <p className={isPc ? 'headerMiddleP' : 'headerMiddlePNoPc'}></p> */}
        <p
          className={
            isPc ? 'headerMiddleP' : isTablet ? 'headerMiddlePNoPc' : null
          }
        ></p>

        {/* <div className={isPc ? 'headerBottom' : 'headerBottomNoPc'}> */}
        <div
          className={
            isPc
              ? 'headerBottom'
              : isTablet
              ? 'headerBottomNoPc'
              : 'headerBottomMobile'
          }
        >
          {/* <div className={isPc ? 'BottomSlickTrack' : 'BottomSlickTrackNoPc'}> */}
          <div
            className={
              isPc
                ? 'BottomSlickTrack'
                : isTablet
                ? 'BottomSlickTrackNoPc'
                : 'BottomSlickTrackMobile'
            }
          >
            {isMobile ? null : (
              <button className="manyleftButton2">
                <svg
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
                </svg>
              </button>
            )}

            <button className="BottomTrack1">
              <span className="BottomTrackText">연봉이 최고의 복지</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F634f02e0-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="BottomTrack2">
              <span className="BottomTrackText">재택근무</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F5d873f3a-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="BottomTrack3">
              <span className="BottomTrackText">퇴사율 10% 이하</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F7d3cdb3c-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="BottomTrack4">
              <span className="BottomTrackText">급성장 중</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F37dacf86-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="BottomTrack5">
              <span className="BottomTrackText">병역특례</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F6eda33d2-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="BottomTrack6">
              <span className="BottomTrackText">50인 이하</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F3a965d18-c524-11ec-901c-acde48001122.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="BottomTrack1">
              <span className="BottomTrackText">50인 이상</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F4cec3244-c524-11ec-901c-acde48001122.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="BottomTrack1">
              <span className="BottomTrackText">업력 5년 이상</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F45bb9794-c524-11ec-901c-acde48001122.png&w=50&q=75"
                alt=""
              />
            </button>
            <button className="BottomTrack1">
              <span className="BottomTrackText">유연근무</span>
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ftags%2F827f6146-9f6e-11ec-b909-0242ac120002.png&w=50&q=75"
                alt=""
              />
            </button>
            {isMobile ? null : (
              <button className="manyRightButton2">
                <svg
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 18 18"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </button>
            )}
          </div>
        </div>

        {scrollEvent ? (
          <p className="headerLastP2"></p>
        ) : (
          <p className="headerLastP"></p>
        )}
      </div>
    </>
  );
}

export default DevHeader;
