import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import github from "../assets/github.png";

const SideProjectCard = ({
  id,
  title,
  desc,
  tag,
  tech,
  githubLink,
  viewLink,
  viewText,
}) => {
  const [hover, setHover] = useState(false);

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`side-card ${
        theme === "light" ? "card-light" : "card-dark"
      } flex justify-between items-center 2xl:gap-6 xl:gap-6 gap-4 ${
        id % 2 === 1 ? "2xl:relative 2xl:top-1/2 xl:relative xl:top-1/2" : ""
      }`}
    >
      <div className="side-card-display"></div>
      <div className="flex flex-col gap-1 flex-1">
        <div
          className={`side-card-header ${
            theme === "light"
              ? "side-card-header-light"
              : "side-card-header-dark"
          } flex justify-between items-center w-full`}
        >
          <h1>{title}</h1>
          <div className="flex items-center 2xl:gap-2 xl:gap-2 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="2xl:scale-100 xl:scale-100 scale-75"
            >
              <circle cx="8" cy="8" r="8" fill="#0075FF" />
            </svg>
            <p>{tag}</p>
          </div>
        </div>
        <div
          className={`side-card-body ${
            theme === "light" ? "side-card-body-light" : "side-card-body-dark"
          }`}
        >
          <h2 className="mb-2">{desc}</h2>
          <div className="flex justify-between items-center">
            <p>{tech}</p>
            <div className="github-button flex gap-2 items-center justify-center">
              <img src={github} className="h-6 w-6" />
              <span className="">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProjectCard;
