import React, { useState } from "react";
// import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import Keyboard from "./Keyboard";
import Pageplay from "./Pageplay";
import github from "../assets/github.png";
import arrow from "../assets/arrow.png";

const Card = ({
  id,
  title,
  tag,
  tagIcon,
  desc,
  tech,
  githubLink,
  viewLink,
  viewText,
}) => {
  const theme = useSelector((state) => state.theme.theme);

  const [githubHover, setGithubHover] = useState(false);
  const [headingHover, setHeadingHover] = useState(false);

  return (
    <div
      className={`card ${theme === "light" ? "card-light" : "card-dark"} flex ${
        id === 2 ? "2xl:relative 2xl:top-32 xl:relative xl:top-44" : ""
      }`}
    >
      <div
        className={`card-header ${
          theme === "light" ? "card-header-light" : "card-header-dark"
        } flex justify-between items-center w-full`}
      >
        <div
          className="flex justify-center items-center"
          style={{ gap: "6px" }}
        >
          <h1 className="">{title}</h1>
          <a
            className="h-10 w-10 flex justify-center items-center cursor-pointer visit-arrow "
            onMouseEnter={() => setHeadingHover(true)}
            onMouseLeave={() => setHeadingHover(false)}
            onMouseOver={() => setHeadingHover(true)}
          >
            <div className="absolute overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className={`${
                  headingHover === true ? "arrow-1-move" : "arrow-1-back"
                } relative -bottom-7 -left-7`}
              >
                <path
                  d="M14 15C18.6863 15 21.3137 15 26 15V27"
                  stroke="black"
                  strokeWidth={3}
                />
                <path d="M26 15L14 27" stroke="black" strokeWidth={3} />
              </svg>
            </div>
            <div className="overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className={`${
                  headingHover === true ? "arrow-2-move" : "arrow-2-back"
                } relative `}
              >
                <path
                  d="M14 15C18.6863 15 21.3137 15 26 15V27"
                  stroke="black"
                  strokeWidth={3}
                />
                <path d="M26 15L14 27" stroke="black" strokeWidth={3} />
              </svg>
            </div>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <img src={tagIcon} className="h-4 w-4" />
          <p>{tag}</p>
        </div>
      </div>
      <div className="card-display">
        {title === "Textplay" && <Pageplay />}
        {title === "Keyboard" && <Keyboard />}
      </div>
      <div
        className={`card-body ${
          theme === "light" ? "card-body-light" : "card-body-dark"
        }`}
      >
        <h2 className="2xl:mb-8 xl:mb-8 mb-6">{desc}</h2>
        <div className="flex justify-between items-center">
          <p>{tech}</p>

          <div
            className="github-button relative overflow-hidden"
            onMouseEnter={() => setGithubHover(true)}
            onMouseLeave={() => setGithubHover(false)}
            onMouseOver={() => setGithubHover(true)}
          >
            <div
              className={`flex gap-3 items-center justify-center relative left-7 ${
                githubHover === true
                  ? "github-button-move"
                  : "github-button-back"
              }`}
            >
              <img src={github} className="h-6 w-6 absolute -left-8" />
              <span className="">GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                style={{ position: "relative", top: "1px", left: "5px" }}
              >
                <path
                  d="M1 1C3.20914 3.20914 4.44771 4.44771 6.65685 6.65685L1 12.3137"
                  stroke="black"
                  strokeWidth={2}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
