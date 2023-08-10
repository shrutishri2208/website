import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import Keyboard from "./Keyboard";
import Murk from "./Murk";
import Pageplay from "./Pageplay";
import Wordwise from "./Wordwise";

const Card = ({
  id,
  title,
  tag,
  desc,
  tech,
  githubLink,
  viewLink,
  viewText,
}) => {
  const theme = useSelector((state) => state.theme.theme);

  const [hover, setHover] = useState(false);

  return (
    <div
      className={`card ${theme === "light" ? "card-light" : "card-dark"} flex ${
        id % 2 === 1 ? "2xl:relative 2xl:top-44 xl:relative xl:top-44" : ""
      }`}
    >
      <div
        className={`card-header ${
          theme === "light" ? "card-header-light" : "card-header-dark"
        } flex justify-between items-center w-full`}
      >
        <h1 className="">{title}</h1>

        <div className="flex items-center gap-2">
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
      <div className="card-display flex-1">
        {title === "Pageplay" && <Pageplay />}
        {title === "Murk" && <Murk />}
        {title === "Keyboard" && <Keyboard />}
        {title === "Wordwise" && <Wordwise />}
      </div>
      <div
        className={`card-body ${
          theme === "light" ? "card-body-light" : "card-body-dark"
        }`}
      >
        <h2 className="mb-4">{desc}</h2>
        <div className="flex justify-between items-center">
          <p>{tech}</p>
          <div className="flex items-center 2xl:gap-4 xl:gap-4 gap-2">
            <div
              className={`github-button ${
                theme === "light" ? "github-button-light" : "github-button-dark"
              }`}
            >
              <a href={githubLink}>
                <GitHubIcon />
              </a>
            </div>
            <div
              className={`${
                theme === "light"
                  ? "download-button-light"
                  : "download-button-dark"
              } download-button`}
            >
              <a href={viewLink}>
                <div className="flex items-center justify-center gap-1 cursor-pointer">
                  <span>{viewText}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
