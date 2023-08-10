import React from "react";
import { useSelector } from "react-redux";

const TextContainer = ({ index, text }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-16 relative">
        <h1
          className={`font-extrabold absolute ${
            theme === "light"
              ? "text-black opacity-10"
              : "text-white opacity-10"
          } ${
            index === 1
              ? "left-24 top-8"
              : index === 2
              ? " right-36 -bottom-12"
              : "top-12 left-8"
          }`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default TextContainer;
