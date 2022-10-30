import React, { useEffect, useRef, useState } from 'react';
const TOTAL_SLIDES = 7; //전체 슬라이드 개수 (배열로 계산 총 8개)

const SliderRef = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const NextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      return; //클릭이 작동하지 않는다.
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const PrevSlide = () => {
    if (currentSlide === 0) {
      return;
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = 'all 0.5s ease-in-out';
    slideRef.current.style.tansform = `translateX(-${currentSlide}00%)`;
  }, [currentSlide]);

  return <></>;
};

export default SliderRef;
