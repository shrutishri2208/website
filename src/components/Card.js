import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import Keyboard from "./Keyboard";
import Murk from "./Murk";
import Pageplay from "./Pageplay";
import Wordwise from "./Wordwise";

const Card = ({ id, title, tag }) => {
  const theme = useSelector((state) => state.theme.theme);

  const [hover, setHover] = useState(false);

  return (
    <div
      className={`card ${theme === "light" ? "card-light" : "card-dark"} flex ${
        id % 2 === 1 ? "relative top-44" : ""
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
        <h2 className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum ac libero sit amet efficitur. Nulla tristique, ex eget
          facilisis auctor, nisl dui.
        </h2>
        <div className="flex justify-between items-center">
          <p>Tag 1, Tag 2, Tag 3</p>
          <div className="flex items-center gap-4">
            <div
              className={`github-button ${
                theme === "light" ? "github-button-light" : "github-button-dark"
              } scale-150 mb-1`}
            >
              <GitHubIcon />
            </div>
            <div
              className={`${
                theme === "light"
                  ? "download-button-light"
                  : "download-button-dark"
              } download-button`}
            >
              <div className="flex items-center justify-center gap-1 cursor-pointer">
                {/* <KeyboardArrowLeftIcon /> */}
                <span>Download</span>
                {/* <KeyboardArrowRightIcon className="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
