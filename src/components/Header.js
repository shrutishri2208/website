import React, { useState } from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between  ">
      <Title />
      <Menu />
    </div>
  );
};

const Title = () => {
  const [headingHover, setHeadingHover] = useState(false);

  return (
    <div className="flex justify-center items-center" style={{ gap: "8px" }}>
      <a
        rel="noreferrer"
        href="https://github.com/shrutishri2208"
        target="_blank"
        className={`flex justify-center items-center `}
        onMouseEnter={() => setHeadingHover(true)}
        onMouseLeave={() => setHeadingHover(false)}
        onMouseOver={() => setHeadingHover(true)}
      >
        <h1 className="text-white text-2xl"> github/shrutishri</h1>
        <div className="relative overflow-hidden ml-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            className={`${
              headingHover === true ? "arrow-1-move" : "arrow-1-back"
            } absolute -bottom-7 -left-7 `}
          >
            <path
              d="M14 15C18.6863 15 21.3137 15 26 15V27"
              stroke={"white"}
              strokeWidth={2.5}
            />
            <path d="M26 15L14 27" stroke={"white"} strokeWidth={2.5} />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            className={`${
              headingHover === true ? "arrow-2-move" : "arrow-2-back"
            } relative -bottom-7 -left-7`}
          >
            <path
              d="M14 15C18.6863 15 21.3137 15 26 15V27"
              stroke={"white"}
              strokeWidth={2.5}
            />
            <path d="M26 15L14 27" stroke={"white"} strokeWidth={2.5} />
          </svg>
        </div>
      </a>
    </div>
  );
};

const Menu = () => {
  return (
    <div className="flex gap-10">
      <a
        rel="noreferrer"
        href="https://github.com/shrutishri2208"
        target="_blank"
      >
        <h2 className="text-white text-xl">Home</h2>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/shrutishri2208"
        target="_blank"
      >
        <h2 className="text-white text-xl">Projects</h2>
      </a>
      <a
        rel="noreferrer"
        href="https://github.com/shrutishri2208"
        target="_blank"
      >
        <h2 className="text-white text-xl">Contact</h2>
      </a>
    </div>
  );
};

export default Header;
