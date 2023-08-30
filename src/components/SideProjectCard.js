import React, { useState } from "react";
import { useSelector } from "react-redux";
import githubBlack from "../assets/github-black.webp";
import githubWhite from "../assets/github-white.webp";

const SideProjectCard = ({
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
    // <div
    //   className={`side-card ${
    //     theme === "light" ? "side-card-light" : "side-card-dark"
    //   } flex ${
    //     id % 2 === 0
    //       ? "2xl:relative 2xl:bottom-36 xl:relative xl:bottom-48"
    //       : ""
    //   } ${id === 3 ? "move-card" : ""} `}
    // >
    <a
      href={viewLink}
      target="_blank"
      className={`side-card ${
        theme === "light" ? "side-card-light" : "side-card-dark"
      } flex ${
        id % 2 === 0
          ? "2xl:relative 2xl:bottom-36 xl:relative xl:bottom-48"
          : ""
      }`}
    >
      <div
        className={`side-card-header ${
          theme === "light" ? "side-card-header-light" : "side-card-header-dark"
        } flex justify-between items-center w-full`}
      >
        <div
          className="flex justify-center items-center"
          style={{ gap: "8px" }}
        >
          <h1 className="">{title}</h1>
          {viewLink && (
            <a
              target="_blank"
              href={viewLink}
              className={`h-10 w-10 flex justify-center items-center cursor-pointer visit-arrow ${
                theme === "light" ? "visit-arrow-light" : "visit-arrow-dark"
              }`}
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
                    stroke={`${theme === "light" ? "black" : "white"}`}
                    strokeWidth={3}
                  />
                  <path
                    d="M26 15L14 27"
                    stroke={`${theme === "light" ? "black" : "white"}`}
                    strokeWidth={3}
                  />
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
                    stroke={`${theme === "light" ? "black" : "white"}`}
                    strokeWidth={3}
                  />
                  <path
                    d="M26 15L14 27"
                    stroke={`${theme === "light" ? "black" : "white"}`}
                    strokeWidth={3}
                  />
                </svg>
              </div>
            </a>
          )}
        </div>

        <a className="flex items-center gap-1" href={viewLink} target="_blank">
          <img
            src={tagIcon}
            className="2xl:h-5 2xl:w-5 xl:h-5 xl:w-5 h-4 w-4"
          />
          <p style={{ position: "relative", top: "1.2px" }}>{tag}</p>
        </a>
      </div>
      <div
        className={`side-card-body ${
          theme === "light" ? "side-card-body-light" : "side-card-body-dark"
        }`}
      >
        <h2 className="2xl:mb-8 xl:mb-8 mb-6">{desc}</h2>
        <div className="flex justify-between items-center">
          <p className="mr-16 "> {tech}</p>
          <a
            href={githubLink}
            target="_blank"
            className="shrink-0 github-mobile"
          >
            {theme === "light" ? (
              <img src={githubBlack} className="h-8 w-8 relative right-1" />
            ) : (
              <img src={githubWhite} className="h-8 w-8 relative right-1" />
            )}
          </a>
          <a
            href={githubLink}
            target="_blank"
            className={`github-button relative overflow-hidden shrink-0 github-desktop ${
              theme === "light" ? "github-light" : "github-dark"
            }`}
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
              {theme === "light" ? (
                <img src={githubBlack} className="h-6 w-6 absolute -left-8 " />
              ) : (
                <img src={githubWhite} className="h-6 w-6 absolute -left-8 " />
              )}

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
                  stroke={`${theme === "light" ? "black" : "white"}`}
                  strokeWidth={2}
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </a>
  );
};

export default SideProjectCard;
