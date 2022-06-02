import React from "react";
import { useState } from "react";

const Nothing = () => {
  const [count, setCount] = useState(0);
  const scorll = (e) => {
    setCount(count + 1);
  };
  return (
    <div className="area">
      <div className="inside" onScroll={scorll}>
        <div className="content"></div>
        <div className="thing">Just Scroll</div>
      </div>
      <div className="count">{count}</div>
    </div>
  );
};

export default Nothing;
