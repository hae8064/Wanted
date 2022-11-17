import React, { useEffect, useMemo, useState } from "react";
import { throttle } from "lodash";

function TabletHeaderMiddle() {
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
    window.addEventListener("scroll", onScrollFn);
    return () => {
      //컴포넌트 나갈 떄 작동
      window.removeEventListener("scroll", onScrollFn);
    };
  }, []);
  return <div>TabletHeaderMiddle</div>;
}

export default TabletHeaderMiddle;
