import React, { useState } from "react";
import { useSelector } from "react-redux";

const Gradient = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className=" h-full w-screen absolute z-30 opacity-100 overflow-x-hidden">
      <div
        className={`gradient2 absolute ${
          theme === "light" ? "opacity-20" : "opacity-15"
        } `}
      ></div>
      <div
        className={`gradient1 absolute ${
          theme === "light" ? "opacity-20" : "opacity-15"
        }`}
      ></div>
      <div
        className={`gradient3 absolute ${
          theme === "light" ? "opacity-20" : "opacity-15"
        }`}
      ></div>
    </div>
  );
};

export default Gradient;
