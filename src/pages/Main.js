import React from "react";
import Debounce from "../components/Debounce";
import Nothing from "../components/Nothing";
import Throttle from "../components/Throttle";
const Main = () => {
  return (
    <div>
      <Nothing />
      <Debounce />
      <Throttle />
    </div>
  );
};

export default Main;
