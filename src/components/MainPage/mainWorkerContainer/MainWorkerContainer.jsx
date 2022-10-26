import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./MainWorkerContainer.css";

const MainWorkerContainer = () => {
  const setting = {
    // slide: "div", //슬라이드 되어야 할 태그
    slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
    slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
    draggable: true,
    arrow: false,
    // centerMode: true,
    // ceterPadding: "100px",
    // prevArrow: <button type="button" class="articleLeftClick"></button>,
    // nextArrow: (
    //   <button type="button" class="articleRightClick">
    //     Next
    //   </button>
    // ),
  };
  return (
    <div className="articleContainer2">
      <div className="articleTop">
        <button className="articleLeftClick">
          <svg className="svgLeftButton" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </button>
        <div className="articleCenterText">
          <h2 className="articleText">직장인을 위한 Wanted+ VOD</h2>
          <div className="vodContainer2">
            <a className="articleWhole" href="">
              VOD 전체보기
              <svg className="svgCenterButton" viewBox="0 0 19 19">
                <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
              </svg>
            </a>
          </div>
        </div>

        <button className="articleRightClick">
          <svg className="svgRightButton" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </button>
      </div>

      {/* <Slider {...setting}> */}
      <div className="workerBottomContainer">
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
            <span className="bottomTag3">팀장으로 산다는 건:Live Talk #30</span>
          </a>
        </div>
        <div className="articleBottom three">
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
        {/* <div className="articleBottom">
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
        </div> */}
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default MainWorkerContainer;
