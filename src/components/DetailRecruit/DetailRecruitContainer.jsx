import React from "react";
import Footer from "../Common/Footer/Footer";
import FooterBanner from "../Common/FooterBanner/FooterBanner";
import GridCard from "../Common/GridCard/GridCard";
import DetailGrid from "./DetailGrid/DetailGrid";
import DetailMainLeft from "./DetailMainLeft/DetailMainLeft";
import DetailMainRight from "./DetailMainRight/DetailMainRight";
import DetailMap from "./DetailMap/DetailMap";
import DetailMapBottom from "./DetailMapBottom/DetailMapBottom";
import "./DetailRecruitContainer.css";
import DetailRecruitMain from "./DetailRecruitMain/DetailRecruitMain";
import dummy from "../../db/data.json";
import GridContainer from "../DevelopPage/GridContainer/GridContainer";

function DetailRecruitContainer() {
  const gridCard = [
    {
      id: 0,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31829%2Fjnpo0nc96whq3m5x__400_400.jpg&w=400&q=75",
      title: "웹 베이스 클라우드 소프트웨어",
      develop: "front-end",
      companyName: "이마고윅스",
      respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 1,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35490%2Fri4mmve51yszgclk__400_400.jpg&w=400&q=75",
      title: "Senior Frontend Engineer",
      develop: "Innovation",
      companyName: "루닛(Lunit)",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 2,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22152%2Fzfcvnwqkqwrddima__400_400.png&w=400&q=75",
      title: "마스터 기획 및 개발자",
      // develop: "",
      companyName: "대연알이디(DaEYENREDCO.LTD)",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 3,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26550%2F7bwv39igxzvlkbmz__400_400.jpg&w=400&q=75",
      title: "프론트엔드 개발자",
      develop: "front-end",
      companyName: "블루웨일컴퍼니",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 4,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31829%2Fjnpo0nc96whq3m5x__400_400.jpg&w=400&q=75",
      title: "웹 베이스 클라우드 소프트웨어",
      develop: "front-end",
      companyName: "이마고윅스",
      respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 5,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35490%2Fri4mmve51yszgclk__400_400.jpg&w=400&q=75",
      title: "Senior Frontend Engineer",
      develop: "Innovation",
      companyName: "루닛(Lunit)",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 6,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22152%2Fzfcvnwqkqwrddima__400_400.png&w=400&q=75",
      title: "마스터 기획 및 개발자",
      // develop: "",
      companyName: "대연알이디(DaEYENREDCO.LTD)",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 7,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26550%2F7bwv39igxzvlkbmz__400_400.jpg&w=400&q=75",
      title: "프론트엔드 개발자",
      develop: "front-end",
      companyName: "블루웨일컴퍼니",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 8,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31829%2Fjnpo0nc96whq3m5x__400_400.jpg&w=400&q=75",
      title: "웹 베이스 클라우드 소프트웨어",
      develop: "front-end",
      companyName: "이마고윅스",
      respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 9,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35490%2Fri4mmve51yszgclk__400_400.jpg&w=400&q=75",
      title: "Senior Frontend Engineer",
      develop: "Innovation",
      companyName: "루닛(Lunit)",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 10,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22152%2Fzfcvnwqkqwrddima__400_400.png&w=400&q=75",
      title: "마스터 기획 및 개발자",
      // develop: "",
      companyName: "대연알이디(DaEYENREDCO.LTD)",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 11,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26550%2F7bwv39igxzvlkbmz__400_400.jpg&w=400&q=75",
      title: "프론트엔드 개발자",
      develop: "front-end",
      companyName: "블루웨일컴퍼니",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 12,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31829%2Fjnpo0nc96whq3m5x__400_400.jpg&w=400&q=75",
      title: "웹 베이스 클라우드 소프트웨어",
      develop: "front-end",
      companyName: "이마고윅스",
      respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 13,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F31829%2Fjnpo0nc96whq3m5x__400_400.jpg&w=400&q=75",
      title: "웹 베이스 클라우드 소프트웨어",
      develop: "front-end",
      companyName: "이마고윅스",
      respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 14,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F35490%2Fri4mmve51yszgclk__400_400.jpg&w=400&q=75",
      title: "Senior Frontend Engineer",
      develop: "Innovation",
      companyName: "루닛(Lunit)",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 15,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F22152%2Fzfcvnwqkqwrddima__400_400.png&w=400&q=75",
      title: "마스터 기획 및 개발자",
      // develop: "",
      companyName: "대연알이디(DaEYENREDCO.LTD)",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
    {
      id: 16,
      img: "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fcompany%2F26550%2F7bwv39igxzvlkbmz__400_400.jpg&w=400&q=75",
      title: "프론트엔드 개발자",
      develop: "front-end",
      companyName: "블루웨일컴퍼니",
      // respone: "응답률 매우 높음",
      city: "서울",
      country: "한국",
      price: "1000000",
    },
  ];

  return (
    <div className="RecruitContainer">
      <div className="positionContainer">
        <div className="positionContainerLeft">
          <DetailRecruitMain />
          <DetailMainLeft />
          <DetailMap />
          <DetailMapBottom />
        </div>
        <DetailMainRight />
      </div>

      <DetailGrid />
      {/* <div className="gridCardContainer"> */}
      {/* {gridCard.map((card) => (
          <GridCard
            key={card.id}
            img={card.img}
            title={card.title}
            develop={card.develop}
            companyName={card.companyName}
            respone={card.respone}
            city={card.city}
            country={card.country}
            price={card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          />
        ))} */}
      {/* {dummy.developGridContainer.map((card) => (
          <GridCard
            key={card.id}
            img={card.img}
            title={card.title}
            develop={card.develop}
            companyName={card.companyName}
            respone={card.respone}
            city={card.city}
            country={card.country}
            price={card.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          />
        ))} */}
      {/* </div> */}
      <GridContainer />

      <Footer />
      <FooterBanner />
    </div>
  );
}

export default DetailRecruitContainer;
