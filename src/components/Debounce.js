import React from "react";
import "./component.css";
import { useState } from "react";
const Debounce = () => {
  const [count, setCount] = useState(0);
  const debounceScroll = (callback, delay) => {
    // callback => 일정 시간이 지난 후 실행되는 함수
    // delay => 지연 시간
    let timer;

    return (...args) => {
      // 실행할 함수(setTimeout())를 취소
      clearTimeout(timer); // reset( 0.4초가 지나기 전에 )

      // delay가 지나면 callback 함수를 실행
      timer = setTimeout(() => {
        return callback(...args);
      }, delay);
    };
  };

  const increaseCount = () => {
    setCount(count + 1);
  };
  // onchange 이벤트에 위 함수를 적용해서 구현

  return (
    <div className="area">
      <div className="inside" onScroll={debounceScroll(increaseCount, 300)}>
        <div className="content"></div>
        <div className="thing">Debounce Scroll</div>
      </div>
      <div className="count">{count}</div>
    </div>
  );
};

export default Debounce;
