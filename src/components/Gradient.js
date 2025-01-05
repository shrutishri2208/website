import React, { useState } from "react";
import { useSelector } from "react-redux";

const Gradient = () => {
  return (
    <div className="h-full w-screen absolute z-30 opacity-100 overflow-x-hidden">
      <div className={`gradient2 absolute opacity-5`}></div>
      <div className={`gradient1 absolute opacity-5`}></div>
      <div className={`gradient3 absolute opacity-5`}></div>
    </div>
  );
};

export default Gradient;
