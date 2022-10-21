import React from "react";
import "./main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Main() {
  const setting = {
    // slide: "div", //슬라이드 되어야 할 태그
    slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    draggable: true,
    // centerMode: true,
    // ceterPadding: "100px",
    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    // nextArrow: "<button type='button' class='slick-next'>Next</button>",
  };

  const manyButtons = [
    {
      className: "manybuttons career",
      spanText: "커리어고민",
    },
    {
      className: "manybuttons companylife",
      spanText: "회사생활",
    },
    {
      className: "manybuttons curture",
      spanText: "조직문화",
    },
    {
      className: "manybuttons passmove",
      spanText: "취업/이직",
    },
    {
      className: "manybuttons leader",
      spanText: "리더십",
    },
    {
      className: "manybuttons personrel",
      spanText: "인간관계",
    },
    {
      className: "manybuttons lifestyle",
      spanText: "라이프스타일",
    },
    {
      className: "manybuttons ittech",
      spanText: "IT/기술",
    },
    {
      className: "manybuttons contents",
      spanText: "콘텐츠제작",
    },
    {
      className: "manybuttons develop",
      spanText: "개발",
    },
    {
      className: "manybuttons service",
      spanText: "서비스기획",
    },
    {
      className: "manybuttons marketing",
      spanText: "마케팅",
    },
    {
      className: "manybuttons md",
      spanText: "MD",
    },
    {
      className: "manybuttons career",
      spanText: "커리어고민",
    },
    {
      className: "manybuttons companylife",
      spanText: "회사생활",
    },
    {
      className: "manybuttons curture",
      spanText: "조직문화",
    },
    {
      className: "manybuttons passmove",
      spanText: "취업/이직",
    },
    {
      className: "manybuttons leader",
      spanText: "리더십",
    },
  ];

  return (
    <div className="main">
      <div className="insightclassName">
        <h2 className="insight">나에게 필요한 커리어 인사이트</h2>
        <svg
          className="insightsearch"
          width="24"
          height="24"
          viewBox="0 0 17 17"
        >
          <defs>
            <filter id="bfoh3u0w3a">
              <feColorMatrix
                in="SourceGraphic"
                values="0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 0 0.600000 0 0 0 1.000000 0"
              ></feColorMatrix>
            </filter>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <g>
              <g>
                <g>
                  <g>
                    <path
                      stroke="#999"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                      d="M9.421 13.334c-.736.277-1.535.43-2.368.43-3.706 0-6.71-3.005-6.71-6.711 0-3.707 3.004-6.71 6.71-6.71 1.853 0 3.53.75 4.745 1.965 1.214 1.214 1.965 2.892 1.965 4.745 0 1.853-.75 3.53-1.965 4.745"
                      transform="translate(1 1)"
                    ></path>
                    <path
                      fill="#999"
                      d="M6.382 10.408c0-.371.3-.671.67-.671.371 0 .672.3.672.67 0 .372-.3.672-.671.672-.37 0-.671-.3-.671-.671"
                      transform="translate(1 1) rotate(-180 7.053 10.408)"
                    ></path>
                    <path
                      stroke="#999"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.2"
                      d="M5.04 5.655c0-1.08.901-1.958 2.013-1.958 1.11 0 2.013.877 2.013 1.958 0 1.08-1.007 1.957-2.013 1.957v.783"
                      transform="translate(1 1)"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>

      <div className="manybuttonsContainer">
        <div className="manyButton">
          <div className="leftButtonContainer">
            <button className="manyleftButton">
              <svg
                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                viewBox="0 0 18 18"
              >
                <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
              </svg>
            </button>
          </div>

          {manyButtons.map((comp) => {
            return (
              <button className={comp.className}>
                <span className="buttonTexts">{comp.spanText}</span>
              </button>
            );
          })}

          <button className="manyRightButton">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </button>
        </div>

        <div className="manybuttonsRight">
          <button className="manybuttonsMenu">
            <svg width="16" height="3" viewBox="0 0 16 3">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2 0C2.828 0 3.5 0.672 3.5 1.5C3.5 2.328 2.828 3 2 3C1.172 3 0.5 2.328 0.5 1.5C0.5 0.672 1.172 0 2 0ZM8 0C8.828 0 9.5 0.672 9.5 1.5C9.5 2.328 8.828 3 8 3C7.172 3 6.5 2.328 6.5 1.5C6.5 0.672 7.172 0 8 0ZM14 0C14.828 0 15.5 0.672 15.5 1.5C15.5 2.328 14.828 3 14 3C13.172 3 12.5 2.328 12.5 1.5C12.5 0.672 13.172 0 14 0Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="mainRightBanner">
        <div className="RightBannertop">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fimage.wanted.co.kr%2Fuserweb%2Fcareerhome%2Fcreator-application.png&w=144&q=90"
            alt=""
          />
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 24 24"
          >
            <path d="M17.97 19.03a.749.749 0 1 0 1.06-1.06l-6.5-6.5a.749.749 0 0 0-1.06 0l-6.5 6.5a.749.749 0 1 0 1.06 1.06L12 13.06l5.97 5.97zM12 10.94 6.03 4.97a.749.749 0 1 0-1.06 1.06l6.5 6.5a.749.749 0 0 0 1.06 0l6.5-6.5a.749.749 0 1 0-1.06-1.06L12 10.94z"></path>
          </svg>
        </div>
        <div className="RightBannerMiddle">
          <div className="MiddleText1">즐겨보는</div>
          <div className="MiddleText1">크리에이터의 글도</div>
          <div className="MiddleText1">추천하고 싶다면?</div>
        </div>
        <hr className="Divider_Divider__root__f2LD0 CreatorBannerAside_CreatorBannerAside__divider__MSHsB" />
        <a className="RightBannerBottom">
          <span className="RightBannerTextBlue">크리에이터 추천하기</span>
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </a>
      </div>

      <div className="gridContnaier">
        <div className="grid1">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F78349463.jpg&w=500&q=75"
            alt="이미지"
          />
          <div className="title">모든 것이 대표 마음대로인 회사</div>
          <div className="subtitle">
            모든 것이 대표 마음대로인 회사에서 이직을 고민하는 직장인의 실제
            사연을 통해 '직장생활의 리...
          </div>
          <div className="grid1footer">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              alt=""
            />
            <p>한국인컨설팅&마인드클리닉 노주선</p>
          </div>
        </div>
        <div className="grid2">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220703%2F14%2F51209230.jpg&w=500&q=75"
            alt="이미지"
          />
          <div className="title">Talk: 면접을부탁해 - 전체직군</div>
          <div className="subtitle">
            다수의 면접에 참여하면서 알게된 합격하는 vs 불합격하는 면접자의
            차이, 면접관이 궁금해하는..
          </div>
          <div className="grid1footer">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              alt=""
            />
            <p>원티드랩 이하나</p>
          </div>
        </div>
        <div className="grid3">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20220516%2F17%2F75369770.jpg&w=500&q=75"
            alt="이미지"
          />
          <div className="title">좋은 동료 But 낮은 연봉과 보상</div>
          <div className="subtitle">
            동료는 좋지만 낮은 연봉과 보상 때문에 사표를 품에 넣은 직장인의 실제
            사연을 통해 '직장생활의 ...
          </div>
          <div className="grid1footer">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              alt=""
            />
            <p>한국인컨설팅&마인드클리닉 노주선</p>
          </div>
        </div>
        <div className="grid4">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F3%2F00902011.jpg&w=500&q=75"
            alt="이미지"
          />
          <div className="title">
            예시 사례를 살펴보는 실제 이력서 작성법 - 백승엽
          </div>
          <div className="subtitle">
            오늘은 실제 예시를 통해 이력서를 작성하는 방법에 대해 알아보니다.
            지난 영상에서 이력서가 무...
          </div>
          <div className="grid1footer">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              alt=""
            />
            <p>원티드랩 백승엽</p>
          </div>
        </div>
        <div className="grid5">
          <img
            src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F5oek%2Fimage%2FQoRB05YYYjyophWdVBwBJjULlNc.jpg&w=500&q=75"
            alt="이미지"
          />
          <div className="title">드디어 플러스엑스 멤버가 되었습니다.</div>
          <div className="subtitle">
            Plus 人(in)spiration- 플러스엑스의 '일' 그리고 '사람'이야기 더하기를
            기울여 곱하기로 변화...
          </div>
          <div className="grid1footer">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
              alt=""
            />
            <p>플러스엑스</p>
          </div>
        </div>
        <div className="grid6">
          <img
            src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FA1Z%2Fimage%2Fu3dU1x27WkoIp68gWxiIWiEIXhE.jpg&w=500&q=75"
            alt="이미지"
          />
          <div className="title">
            성별, 학력, 나이, 경력도 보지 않고 사람을 뽑았더니
          </div>
          <div className="subtitle">
            저희 애프터모멘트가 벌써 대기업이 됐어요. 4명이 되었거든요. 내년에
            한 명 더 뽑으면 이제.. 큰
          </div>
          <div className="grid1footer">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
              alt=""
            />
            <p>박창선</p>
          </div>
        </div>
        <div className="grid7">
          <img
            src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2FcKow%2Fimage%2Fi6fClIi8hp-qPh0YiuDqeO9PLmw.png&w=500&q=75"
            alt="이미지"
          />
          <div className="title">잘 팔리는 디자이너가 되어보자!</div>
          <div className="subtitle">
            포트폴리오를 잘 만드는 법은 이미 많은 아티클과 강연을 통해 소개되고
            있습니다. 그런데도 여전...
          </div>
          <div className="grid1footer">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fstatic%2Ficon%2Fios%2Ficon120.png&w=60&q=90"
              alt=""
            />
            <p>Wanted Creative</p>
          </div>
        </div>
        <div className="grid8">
          <img
            src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210308%2F4%2F00307525.jpg&w=500&q=75"
            alt="이미지"
          />
          <div className="title">서류전형, 실제로 그러할까? - 임휘진</div>
          <div className="subtitle">
            머리로는 이해했지만, 막상 활용하기에는 어려웠던 이력서 작성
            노하우들...커리어를 고민하는..
          </div>
          <div className="grid1footer">
            <img
              src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Ffavicon%2F144x144.png&w=60&q=90"
              alt=""
            />
            <p>원티드랩 임휘진</p>
          </div>
        </div>
      </div>

      <div className="moreContents">
        <button className="buttonMoreContents">
          <span className="textMoreContents">
            더 많은 콘텐츠 보기
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 19 19"
            >
              <path
                d="M2.71967 5.71967C2.98594 5.4534 3.4026 5.4292 3.69621 5.64705L3.78033 5.71967L9.499 11.438L15.2162 5.7211C15.4824 5.45479 15.899 5.43051 16.1927 5.64832L16.2768 5.72092C16.5431 5.98715 16.5674 6.40381 16.3496 6.69745L16.277 6.78158L10.0304 13.0302C9.76416 13.2966 9.34745 13.3208 9.0538 13.103L8.96967 13.0303L2.71967 6.78033C2.42678 6.48744 2.42678 6.01256 2.71967 5.71967Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </button>
      </div>

      <div className="articleContainer">
        <div className="articleTop">
          <button className="articleLeftClick">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </button>

          <div className="articleCenterText">
            <h2 className="articleText">3분만에 읽는 Wanted+ 아티클</h2>
            <a className="articleWhole" href="">
              아티클 전체보기
              <svg
                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                viewBox="0 0 19 19"
              >
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </a>
          </div>

          <button className="articleRightClick">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </button>
        </div>

        {/* <Slider {...setting}> */}
        <div className="bottomContainer2">
          <div className="articleBottom2">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2429%2Ffca14c2b.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle">
                LG전자 | 애플에서 8년은 일하는 방법을 가르쳐 준 시간
              </span>
              <span className="bottomTag">#개발 #IT/기술 #데이터</span>
            </a>
          </div>
          <div className="articleBottom2">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2436%2F5a2f347a.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle">
                리걸 테크 산업을 이끌어 나가는 로앤컴퍼니 AI팀
              </span>
              <span className="bottomTag">#개발 #IT/기술 #취업/이직</span>
            </a>
          </div>
          <div className="articleBottom2">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2439%2F2da70321.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle">
                회사에서도 SNS처럼 만나면 되잖아!
              </span>
              <span className="bottomTag">#경영/전략 #HR #조직문화</span>
            </a>
          </div>
          <div className="articleBottom2">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2437%2F30d52ee0.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle">
                스타트업에서는 어떤 방식으로 시니어를 채용해야 할까?
              </span>
              <span className="bottomTag">#HR #조직문화 #경영/전략</span>
            </a>
          </div>
        </div>
        {/* </Slider> */}
      </div>

      <div className="articleContainer2">
        <div className="articleTop">
          <button className="articleLeftClick">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </button>
          <div className="articleCenterText">
            <h2 className="articleText">직장인을 위한 Wanted+ VOD</h2>
            <div className="vodContainer2">
              <a className="articleWhole" href="">
                VOD 전체보기
                <svg
                  className="SvgIcon_SvgIcon__root__svg__DKYBi"
                  viewBox="0 0 19 19"
                >
                  <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
                </svg>
              </a>
            </div>
          </div>

          <button className="articleRightClick">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </button>
        </div>

        <Slider {...setting}>
          <div className="articleBottom">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210521%2F7%2F68765761.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle1">리더의대화연구소 서수한</span>
              <span className="bottomTitle2">
                함께 일하고 싶은 리더가 되는 질문법
              </span>
              <span className="bottomTag3">
                일잘러의 무기는 테크닉일까, 마인드셋일까: Li...
              </span>
            </a>
          </div>
          <div className="articleBottom">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210713%2F1%2F22621559.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle1">인터비즈 팀장클럽 김진영</span>
              <span className="bottomTitle2">팀장으로 산다는 건</span>
              <span className="bottomTag3">
                팀장으로 산다는 건:Live Talk #30
              </span>
            </a>
          </div>
          <div className="articleBottom">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210609%2F7%2F01781563.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle1">노무법인미담 김동미</span>
              <span className="bottomTitle2">
                선택적 근로시간제의 모든 것 (주52시간제 정착 시리즈3)
              </span>
              <span className="bottomTag3">
                선택적 근로시간제의 모든 것 (주52시간제 정착...
              </span>
            </a>
          </div>
          <div className="articleBottom">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20200819%2F04%2F97576753.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle1">
                모빌스그룹 모춘, 모빌스그룹 대오
              </span>
              <span className="bottomTitle2">
                모춘&대오의 퇴사 후 무자본 창업기
              </span>
              <span className="bottomTag3">
                모춘&대오의 퇴사 후 무자본 창업기: Career...
              </span>
            </a>
          </div>
          <div className="articleBottom">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=http%3A%2F%2Fwanted.video.kr.kollus.com%2Fkr%2Fsnapshot%2Fwanted%2F20210521%2F7%2F68765761.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle1">리더의대화연구소 서수한</span>
              <span className="bottomTitle2">
                함께 일하고 싶은 리더가 되는 질문법
              </span>
              <span className="bottomTag3">
                일잘러의 무기는 테크닉일까, 마인드셋일까: Li...
              </span>
            </a>
          </div>
        </Slider>
      </div>

      <div className="contentsRecommentclassName">
        <span className="contentsRecomment">
          직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요.
        </span>
        <em className="eys">👀</em>
        <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
          <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
        </svg>
      </div>

      <div className="articleContainer3">
        <div className="articleTop">
          <button className="articleLeftClick">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
            </svg>
          </button>
          <div className="articleCenterText">
            <h2 className="articleText">커리어 성장을 위한 맞춤 이벤트</h2>
            <a className="articleWhole" href="">
              이벤트 전체보기
              <svg
                className="SvgIcon_SvgIcon__root__svg__DKYBi"
                viewBox="0 0 19 19"
              >
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </a>
          </div>
          <button className="articleRightClick">
            <svg
              className="SvgIcon_SvgIcon__root__svg__DKYBi"
              viewBox="0 0 18 18"
            >
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </button>
        </div>

        <div className="bottomContainer3">
          <div className="articleBottom3">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2404%2F54ecb586.jpg&w=1200&q=100"
                alt=""
              />
              <span className="EventKind EventKinds_EventKind__eWUu8 is-article">
                <span className="EventKinds_EventKind__text__sYu5A">
                  아티클
                </span>
              </span>
              <span className="bottom3Title">
                인터뷰 | 여성 IT리더들의 성장 경험을 공유합니다!
              </span>
            </a>
          </div>
          <div className="articleBottom3">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2426%2F1fc340dd.jpg&w=1200&q=100"
                alt=""
              />
              <div className="buttonsTag">
                <span className="bottom3online">
                  <svg
                    className="bottom3svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="12"
                    viewBox="0 0 11 12"
                  >
                    <path
                      fill="currentColor"
                      d="M5.98.9A5.09 5.09 0 00.32 6.54l1.03-.1a4.07 4.07 0 014.52-4.53L5.98.89zm4.57 4.56l-1.03.1A4.07 4.07 0 015 10.1l-.11 1.03a5.1 5.1 0 005.66-5.66zM5.76 2.94c-.9-.1-1.84.18-2.53.86a3.06 3.06 0 00-.86 2.54l1.02-.11c-.07-.6.12-1.24.57-1.7a2.05 2.05 0 011.7-.57l.1-1.02zM8.5 5.68l-1.04.12a2 2 0 01-2.24 2.24L5.1 9.06a3.06 3.06 0 003.4-3.4zm-2.53-.22c-.3-.3-.8-.3-1.1 0-.3.3-.29.78.02 1.08.3.3.79.3 1.09 0 .3-.3.3-.78 0-1.08z"
                    ></path>
                  </svg>
                  <span className="EventKinds_EventKind__text__sYu5B">
                    온라인
                  </span>
                </span>

                <span className="EventKind EventKinds_EventKind__eWUu8 is-community">
                  <span className="EventKinds_EventKind__text__sYu5C">
                    네트워킹
                  </span>
                </span>
              </div>
              <span className="bottom3Title">
                스터디살롱 : CS/CX의 실무 꿀팁과 Next Career
              </span>
              <span className="bottom3SubTitle">2022.11.24 (목)</span>
            </a>
          </div>
          <div className="articleBottom3">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2439%2F2da70321.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle">
                회사에서도 SNS처럼 만나면 되잖아!
              </span>
              <span className="bottomTag">#경영/전략 #HR #조직문화</span>
            </a>
          </div>
          <div className="articleBottom">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2437%2F30d52ee0.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle">
                스타트업에서는 어떤 방식으로 시니어를 채용해야 할까?
              </span>
              <span className="bottomTag">#HR #조직문화 #경영/전략</span>
            </a>
          </div>
          <div className="articleBottom">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2429%2Ffca14c2b.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle">
                LG전자 | 애플에서 8년은 일하는 방법을 가르쳐 준 시간
              </span>
              <span className="bottomTag">#개발 #IT/기술 #데이터</span>
            </a>
          </div>
          <div className="articleBottom">
            <a href="">
              <img
                src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fevents%2F2429%2Ffca14c2b.jpg&w=800&q=75"
                alt=""
              />
              <span className="bottomTitle">
                LG전자 | 애플에서 8년은 일하는 방법을 가르쳐 준 시간
              </span>
              <span className="bottomTag">#개발 #IT/기술 #데이터</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
