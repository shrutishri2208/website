import React, { useState } from "react";
import { useSelector } from "react-redux";
import Swiggy from "./Swiggy";
import Netflix from "./Netflix";
import githubBlack from "../assets/github-black.png";
import githubWhite from "../assets/github-white.png";

const CloneCard = ({ id, title, desc, tech, githubLink }) => {
  const [githubHover, setGithubHover] = useState(false);
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
      <div className="clone-card-display">
        {title === "Netflux" && <Netflix />}
        {title === "Zwiggy" && <Swiggy />}
      </div>

      <div
        className={`clone-card-body ${
          theme === "light" ? "clone-card-body-light" : "clone-card-body-dark"
        }`}
      >
        <h2 className="2xl:mb-8 xl:mb-8 mb-6">{desc}</h2>
        <div className="flex justify-between items-center">
          <p>{tech}</p>
          {window.innerWidth < 767 ? (
            <div>
              {theme === "light" ? (
                <img src={githubBlack} className="h-6 w-6 absolute -left-8 " />
              ) : (
                <img src={githubWhite} className="h-6 w-6 absolute -left-8 " />
              )}{" "}
            </div>
          ) : (
            <div
              className={`github-button relative overflow-hidden ${
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
                  <img
                    src={githubBlack}
                    className="h-6 w-6 absolute -left-8 "
                  />
                ) : (
                  <img
                    src={githubWhite}
                    className="h-6 w-6 absolute -left-8 "
                  />
                )}{" "}
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CloneCard;
