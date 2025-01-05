import React from "react";
import { useSelector } from "react-redux";

const TextContainer = ({ index, text }) => {
  return (
    <div className="bg-black">
      <h1 className={`text-white text-heading`}>{text}</h1>
    </div>
  );
};

export default TextContainer;
