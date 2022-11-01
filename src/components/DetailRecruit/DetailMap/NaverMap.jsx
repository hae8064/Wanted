import React, { useEffect, useRef, useState } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

const NaverMapContainer = ({ props }) => {
  const NAVER_API_KEY = process.env.REACT_APP_NAVER_MAP_API_KEY;
  const mapRef = useRef(null);

  return (
    // <RenderAfterNavermapsLoaded
    //   ncpClientId={NAVER_API_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
    //   error={<p>Maps Load Error</p>}
    //   loading={<p>Maps Loading...</p>}
    // >
    //   <NaverMap
    //     mapDivId={'map'} // default: react-naver-map
    //     style={{
    //       width: 800, // 네이버지도 가로 길이
    //       height: 800, // 네이버지도 세로 길이
    //     }}
    //     defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
    //     zoom={props.zoom}
    //   >
    //     {props.address !== null
    //       ? props.test.map((ele, idx) => {
    //           return (
    //             <Marker
    //               // icon={""}
    //               key={idx}
    //               position={{ lat: ele.lat, lng: ele.lng }}
    //               animation={2}
    //               onClick={() => {
    //                 alert('hello');
    //               }}
    //             />
    //           );
    //         })
    //       : null}
    //   </NaverMap>
    // </RenderAfterNavermapsLoaded>

    // <RenderAfterNavermapsLoaded
    //   ncpClientId={process.env.REACT_APP_MAP_CLIENT_ID}
    //   // 네이버 클라우드에서 받은 client id를 적어야 한다.
    //   // 필자는 환경변수 이용
    //   error={<p>Maps Load Error</p>}
    //   loading={<p>Maps Loading...</p>}
    // >
    //   <NaverMap
    //     mapDivId="map"
    //     defaultCenter={{ lat: 37.49988, lng: 127.03856 }}
    //     defaultZoom={16}
    //     zoomControl={true} // 지도 zoom 허용
    //   />
    // </RenderAfterNavermapsLoaded>
    // <NaverMap
    //   mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
    //   style={{
    //     width: '100%', // 네이버지도 가로 길이
    //     height: '85vh', // 네이버지도 세로 길이
    //   }}
    //   defaultCenter={{ lat: 37.5408428, lng: 126.9458903 }} // 지도 초기 위치
    //   defaultZoom={21} // 지도 초기 확대 배율
    //   zoomControl={true}
    // />

    <NaverMap
      mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
      style={{
        width: '100%', // 네이버지도 가로 길이
        height: '85vh', // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: 37.5408428, lng: 126.9458903 }} // 지도 초기 위치
      defaultZoom={21} // 지도 초기 확대 배율
      zoomControl={true}
    >
      <Marker
        position={{ lat: 37.5408428, lng: 126.9458903 }}
        title={'고려빌딩'}
        clickable={true}
      />
    </NaverMap>
  );
};

export default NaverMapContainer;
