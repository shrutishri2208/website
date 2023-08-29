import React from "react";
import { useSelector } from "react-redux";

const TextContainer = ({ index, text }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className=" relative">
      <div className="text-heading md:text-center 2xl:mt-0 xl:mt-0 2xl:mb-0 xl:mb-0 lg:mt-16 lg:mb-8">
        <h1
          className={`2xl:absolute xl:absolute  ${
            theme === "light"
              ? "text-black opacity-10"
              : "text-white opacity-20 "
          } ${
            index === 1
              ? "left-24 top-10"
              : index === 2
              ? "left-32 -top-20"
              : "-top-16 left-12"
          }`}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default TextContainer;
