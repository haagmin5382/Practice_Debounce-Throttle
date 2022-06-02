import React, { useState } from "react";
import "./component.css";

const Throttle = () => {
  const [count, setCount] = useState(0);
  const [throttle, setThrottle] = useState(false);

  const throttleScroll = () => {
    if (throttle) {
      return;
    } else {
      setThrottle(true);
      setTimeout(async () => {
        setCount(count + 1);
        setThrottle(false);
      }, 300);
    }
  };
  return (
    <div className="area">
      <div className="inside" onScroll={throttleScroll}>
        <div className="content"></div>
        <div className="thing">Throttle Scroll</div>
      </div>
      <div className="count">{count}</div>
    </div>
  );
};

export default Throttle;
