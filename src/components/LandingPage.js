import React from "react";
import profile from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/theme/themeActions";
import girl from "../assets/girl.png";
import build from "../assets/build.png";

const LandingPage = () => {
  const theme = useSelector((state) => state.theme.theme);
  console.log(window.innerWidth);

  return (
    <div className="landing-container flex flex-col justify-center items-center relative ">
      <div className="flex flex-col justify-center items-center gap-8 relative 2xl:bottom-0 xl:bottom-0 bottom-8">
        <img src={profile} className="profile-image" />
        <div className="text-center mx-auto">
          <div
            className={`heading ${
              theme === "light" ? "heading-light" : "heading-dark"
            }`}
          >
            Hi! I am{" "}
            <span
              className={`relative name ${
                theme === "light" ? "heading-words-light" : "heading-words-dark"
              }`}
            >
              <span className="absolute text-6xl left-20 -top-4 -rotate-6 -z-1">
                👋
              </span>
              Shruti
            </span>
            , <br />
            a developer who <br />
            <span
              className={`loves relative ${
                theme === "light" ? "heading-words-light" : "heading-words-dark"
              }`}
            >
              loves to
              <span className="heart1 absolute text-5xl -left-8 top-2">❤️</span>
              <span className="heart2 absolute text-3xl -right-2 bottom-6">
                ❤️
              </span>
            </span>{" "}
            design and <br />
            <div
              className={`relative build inline ${
                theme === "light" ? "heading-words-light" : "heading-words-dark"
              }`}
            >
              build
            </div>{" "}
            simple and <br />
            beautiful{" "}
            <div className="software-background inline relative">
              <div
                className={`software inline ${
                  theme === "light"
                    ? "heading-words-light"
                    : "heading-words-dark"
                }`}
              >
                software
              </div>
              .
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 down-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="23"
          viewBox="0 0 39 23"
          fill="none"
        >
          <path
            d="M36.9102 2.45703C30.2827 9.08445 26.567 12.8002 19.9396 19.4276L2.96903 2.45703"
            stroke={`${theme === "light" ? "black" : "white"}`}
            // stroke-opacity="0.1"
            strokeOpacity={0.1}
            strokeWidth={4}
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default LandingPage;
