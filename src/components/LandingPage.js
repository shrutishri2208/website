import React, { useEffect, useState } from "react";
import profile from "../assets/profile.webp";

import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/theme/themeActions";

const LandingPage = ({ isLoading }) => {
  const theme = useSelector((state) => state.theme.theme);
  const [isHeading, setIsHeading] = useState(0);

  useEffect(() => {
    setIsHeading(1);

    const secondTimeout = setTimeout(() => {
      setIsHeading(2);
    }, 4000);

    return () => {
      clearTimeout(secondTimeout);
    };
  }, [isLoading]);

  return (
    <div className="landing-container flex flex-col justify-center items-center  relative ">
      <div className="flex flex-col justify-center items-center relative 2xl:bottom-0 xl:bottom-0 top-4">
        <img
          src={profile}
          className={`${isLoading === false ? "profile-image" : ""} mb-12`}
        />
        <div className="text-center mx-auto">
          <div
            className={`heading ${
              isLoading === false ? "heading-animation" : ""
            } opacity-0 ${
              theme === "light" ? "heading-light" : "heading-dark"
            }`}
          >
            <div>
              Hi! I am{" "}
              <span
                className={`relative name ${
                  theme === "dark"
                    ? "heading-words-dark"
                    : theme === "light" && isHeading === 0
                    ? "heading-light"
                    : theme === "light" && isHeading === 1
                    ? "word-1"
                    : theme === "light" && isHeading === 2
                    ? "heading-words-light"
                    : ""
                }`}
              >
                {/* <span className="absolute text-6xl left-20 -top-4 -rotate-6 -z-1">
                👋
              </span> */}
                Shruti
              </span>
              ,
            </div>
            <div>a developer who</div>
            <div>
              <span
                className={`loves relative  ${
                  theme === "dark"
                    ? "heading-words-dark"
                    : theme === "light" && isHeading === 0
                    ? "heading-light"
                    : theme === "light" && isHeading === 1
                    ? "word-2"
                    : theme === "light" && isHeading === 2
                    ? "heading-words-light"
                    : ""
                }`}
              >
                loves to
                {/* <span className="heart1 absolute text-5xl -left-8 top-2">❤️</span>
              <span className="heart2 absolute text-3xl -right-2 bottom-6">
                ❤️
              </span> */}
              </span>{" "}
              design and
            </div>
            <div>
              <div
                className={`relative build inline  ${
                  theme === "dark"
                    ? "heading-words-dark"
                    : theme === "light" && isHeading === 0
                    ? "heading-light"
                    : theme === "light" && isHeading === 1
                    ? "word-2"
                    : theme === "light" && isHeading === 2
                    ? "heading-words-light"
                    : ""
                }`}
              >
                build
              </div>{" "}
              simple and
            </div>
            <div>
              beautiful{" "}
              <div className="software-background inline relative">
                <div
                  className={`software inline  ${
                    theme === "dark"
                      ? "heading-words-dark"
                      : theme === "light" && isHeading === 0
                      ? "heading-light"
                      : theme === "light" && isHeading === 1
                      ? "word-3"
                      : theme === "light" && isHeading === 2
                      ? "heading-words-light"
                      : ""
                  }`}
                >
                  software
                </div>
                .
              </div>
            </div>
          </div>
        </div>
        <div className="down-arrow mt-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="23"
            viewBox="0 0 39 23"
            fill="none"
          >
            <path
              d="M36.9102 2.45703C30.2827 9.08445 26.567 12.8002 19.9396 19.4276L2.96903 2.45703"
              stroke={`${theme === "light" ? "black" : "white"}`}
              // stroke-opacity="0.1"
              strokeOpacity={1}
              strokeWidth={4}
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
