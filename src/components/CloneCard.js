import React, { useState } from "react";
import { useSelector } from "react-redux";
import github from "../assets/github.png";

const CloneCard = ({ id, title, desc, tech, githubLink }) => {
  const [hover, setHover] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`clone-card ${
        theme === "light" ? "clone-card-light" : "clone-card-dark "
      } flex flex-col`}
    >
      <div
        className={`clone-card-header  ${
          theme === "light"
            ? "clone-card-header-light"
            : "clone-card-header-dark"
        }`}
      >
        <h1>{title}</h1>
      </div>
      <div className="clone-card-display flex-1"></div>

      <div
        className={`clone-card-body ${
          theme === "light" ? "clone-card-body-light" : "clone-card-body-dark"
        }`}
      >
        <h2 className="mb-4">{desc}</h2>
        <div className="flex justify-between items-center">
          <p>{tech}</p>
          <div className="github-button flex gap-2 items-center justify-center">
            <img src={github} className="h-6 w-6" />
            <span className="">GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloneCard;
