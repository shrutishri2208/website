import React, { useState } from "react";
// import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";
import Keyboard from "./Keyboard";
import Murk from "./Murk";
import Pageplay from "./Pageplay";
import Wordwise from "./Wordwise";
import github from "../assets/github.png";
import arrow from "../assets/arrow.png";

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
          <a className="h-10 w-10 flex justify-center items-center cursor-pointer visit-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <rect
                width="40"
                height="40"
                rx="6"
                fill="#141837"
                className="visit-arrow-bg"
              />
              <path
                d="M14 15C18.6863 15 21.3137 15 26 15V27"
                stroke="black"
                stroke-width="3"
              />
              <path d="M26 15L14 27" stroke="black" stroke-width="3" />
            </svg>
          </a>
        </div>

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
        {title === "Textplay" && <Pageplay />}
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
        <div className="flex justify-between items-center mt-8">
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

export default Card;
