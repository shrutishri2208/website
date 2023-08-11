import React from "react";
import profile from "../assets/profile.png";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/theme/themeActions";

const LandingPage = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="landing-container flex justify-center items-center relative z-50">
      <div className="text-center m-auto">
        <p
          className={`heading ${
            theme === "light" ? "heading-light" : "heading-dark"
          }`}
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
    </div>
    // <div className="landing-container">
    //   <div className="flex justify-between items-start">
    //     <div className="theme-toggle-container h-full w-full bg-ye">
    //       {/* <div
    //         className={`theme-toggle-bg ${
    //           theme === "light" ? "bg-open-light" : "bg-open-dark"
    //         }`}
    //       ></div> */}
    //       <button
    //         className="uppercase text-black bg-yellow-400 rounded-full px-3 py-1"
    //         onClick={() => {
    //           if (theme === "light") {
    //             dispatch(setTheme("dark"));
    //           } else {
    //             dispatch(setTheme("light"));
    //           }
    //         }}
    //       >
    //         {theme === "light" ? "D" : "L"}
    //       </button>
    //     </div>
    //     {/* <img src={profile} className="profile-image rounded-lg"></img> */}
    //   </div>
    //   <div className="2xl:flex xl:flex justify-between ">
    //
    //
    //   </div>
    // </div>
  );
};

export default LandingPage;
