import React, { useEffect, useState } from "react";
import profile from "../assets/profile.webp";

import { useDispatch, useSelector } from "react-redux";

const LandingPage = ({ isLoading }) => {
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
    <div className=" flex-col justify-center items-center  ">
      <div className="flex flex-col mt-16 justify-center items-center ">
        <div className="text-center mx-auto">
          <div
            className={`heading ${
              isLoading === false ? "heading-animation" : ""
            } opacity-0 heading-dark`}
          >
            <div>
              Hi! I am{" "}
              <span
                className={`relative name ${
                  isHeading === 0
                    ? "heading-dark"
                    : isHeading === 1
                    ? "word-1"
                    : isHeading === 2
                    ? "text-white"
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
                className={`relative  ${
                  isHeading === 0
                    ? "heading-dark"
                    : isHeading === 1
                    ? "word-2"
                    : isHeading === 2
                    ? "text-white"
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
                className={`relative inline  ${
                  isHeading === 0
                    ? "heading-dark"
                    : isHeading === 1
                    ? "word-2"
                    : isHeading === 2
                    ? "text-white"
                    : ""
                }`}
              >
                build
              </div>{" "}
              simple and
            </div>
            <div>
              beautiful{" "}
              <div className="inline relative">
                <div
                  className={` inline  ${
                    isHeading === 0
                      ? "heading-dark"
                      : isHeading === 1
                      ? "word-3"
                      : isHeading === 2
                      ? "text-white"
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
              stroke={`white`}
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
