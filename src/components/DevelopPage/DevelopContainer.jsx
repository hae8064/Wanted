import React from "react";
import Bookmark from "./Bookmark/Bookmark";
import GridContainer from "./GridContainer/GridContainer";
import DevHeader from "./Header/DevHeader";
import { throttle } from "lodash";
import { useMediaQuery } from "react-responsive";

const DevelopContainer = () => {
  // 반응형 웹
  const isPc = useMediaQuery({
    query: "(min-width:1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width:768px) and (max-width:1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width)",
  });

  return (
    <>
      <DevHeader />
      <Bookmark />
      <GridContainer />
    </>
  );
};

export default DevelopContainer;
