import React from "react";
import { useSelector } from "react-redux";

const TextContainer = ({ index, text }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="2xl:mt-0 xl:mt-0 mt-4 relative">
      <div className="text-heading">
        <h1
          className={`2xl:absolute xl:absolute ${
            theme === "light" ? "black-stroke" : "white-stroke "
          } ${
            index === 1
              ? "left-24 top-10"
              : index === 2
              ? "left-32 -top-20"
              : "top-12 left-12"
          }`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default TextContainer;
