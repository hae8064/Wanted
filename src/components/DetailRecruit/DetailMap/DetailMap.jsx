import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./DetailMap.css";
import NaverMapContainer from "./NaverMap";

const DetailMap = () => {
  // const mapElement = useRef(null);

  // useEffect(() => {
  //   const { naver } = window;
  //   if (!mapElement.current || !naver) return;

  //   //지도에 표시할 위치의 위도와 경도 좌표를 파라미터로 넣어준다.
  //   const location = new naver.maps.LatLng(50.0, 55.0);
  //   const mapOptions = {
  //     center: location,
  //     zoom: 17,
  //     zoomControl: true,
  //     zoomControlOptions: {
  //       position: naver.maps.Position.TOP_RIGHT,
  //     },
  //   };

  //   const map = new naver.maps.Map(mapElement.current, mapOptions);
  //   new naver.maps.Marker({
  //     position: location,
  //     map,
  //   });
  // }, []);

  return (
    <div className="mapContainer">
      <div class="mapTitle">
        <span class="mapTitleLeft">마감일</span>
        <span class="mapTitleRight">상시</span>
      </div>
      <div class="mapSubTitle">
        <span class="mapSubTitleLeft">근무지역</span>
        <span class="mapSubTitleRight">
          서울 용산구 한강대로 366 트윈시티 남산 2 패스트파이브
        </span>
      </div>
      <Link to="/naverMap">
        <div class="imgMap">
          <img
            src="/imgs/11111.png"
            alt=""
            onClick={console.log("네이버 api")}
          />
        </div>
      </Link>
    </div>
  );
};

export default DetailMap;
