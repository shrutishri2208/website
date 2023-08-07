import React from "react";

const TextContainer = ({ index, text }) => {
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-16 relative">
        <h1
          className={`text-8xl font-extrabold opacity-10 absolute ${
            index === 1
              ? "left-24 top-8"
              : index === 2
              ? " right-36 -bottom-8"
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
