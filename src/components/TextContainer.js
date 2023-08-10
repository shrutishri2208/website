import React from "react";
import { useSelector } from "react-redux";

const TextContainer = ({ index, text }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="">
      <div className="text-heading">
        <h1
          className={`font-extrabold 2xl:absolute xl:absolute ${
            theme === "light" ? "text-black" : "text-white "
          } ${
            index === 1
              ? "left-24 top-10"
              : index === 2
              ? " right-36 -bottom-2"
              : "top-8 left-8"
          }`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default TextContainer;
