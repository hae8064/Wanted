import React from "react";
import "./ArticleSliderContainer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ArticleSliderContainer = () => {
  const setting = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    arrows: false,
    // centerMode: true,
    // ceterPadding: "100px",
    // prevArrow: "<button type='button' class='slick-prev'>Previous</button>",
    // nextArrow: "<button type='button' class='slick-next'>Next</button>",
  };
  return (
    <div className="articleContainer">
      <div className="articleTop">
        <button className="articleLeftClick">
          <svg className="svgLeftButton" viewBox="0 0 18 18">
            <path d="m6.045 9 5.978-5.977a.563.563 0 1 0-.796-.796L4.852 8.602a.562.562 0 0 0 0 .796l6.375 6.375a.563.563 0 0 0 .796-.796L6.045 9z"></path>
          </svg>
        </button>

        <div className="articleCenterText">
          <h2 className="articleText">3분만에 읽는 Wanted+ 아티클</h2>
          <a className="articleWhole" href="">
            아티클 전체보기
            <svg className="svgCenterButton" viewBox="0 0 19 19">
              <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
            </svg>
          </a>
        </div>

        <button className="articleRightClick">
          <svg className="svgRightButton" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </button>
      </div>

      <div className="bottomContainer2">
        {/* <Slider {...setting}> */}
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
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default ArticleSliderContainer;
