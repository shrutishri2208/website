import React from "react";
import profile from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/theme/themeActions";
import { light } from "@mui/material/styles/createPalette";

const LandingPage = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  console.log(theme);

  return (
    <div className="relative">
      <div className="flex justify-between items-start">
        <div className="theme-toggle-container">
          <div
            className={`theme-toggle-bg ${
              theme === "light" ? "bg-open-light" : "bg-open-dark"
            }`}
          ></div>
          <button
            className="uppercase text-black bg-yellow-400 rounded-full px-3 py-1"
            onClick={() => {
              if (theme === "light") {
                dispatch(setTheme("dark"));
              } else {
                dispatch(setTheme("light"));
              }
            }}
          >
            {theme === "light" ? "D" : "L"}
          </button>
        </div>
        <img
          src={profile}
          width={"280px"}
          height={"280px"}
          className="rounded-lg"
        ></img>
      </div>
      <div className="flex justify-between ">
        <div className="">
          <p
            className={`heading ${
              theme === "light" ? "heading-light" : "heading-dark"
            }  relative bottom-20`}
          >
            Hi! I am{" "}
            <span
              className={`${
                theme === "light" ? "heading-words-light" : "heading-words-dark"
              }`}
            >
              Shruti
            </span>
            , <br />
            a developer who <br />
            <span
              className={`${
                theme === "light" ? "heading-words-light" : "heading-words-dark"
              }`}
            >
              loves to
            </span>{" "}
            design and <br />
            <span
              className={`${
                theme === "light" ? "heading-words-light" : "heading-words-dark"
              }`}
            >
              build
            </span>{" "}
            simple and <br />
            beautiful{" "}
            <span
              className={`${
                theme === "light" ? "heading-words-light" : "heading-words-dark"
              }`}
            >
              software
            </span>
            .
          </p>
        </div>
        <div
          className={`${
            theme === "light" ? "work-button-light" : "work-button-dark"
          } cursor-pointer flex items-center fixed right-0 z-50 `}
          style={{ bottom: "5.5rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle opacity="0.3" cx="8" cy="8" r="8" fill="#22E765" />
            <circle cx="8" cy="8" r="3" fill="#22E765" />
          </svg>
          <p>Open for work</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
