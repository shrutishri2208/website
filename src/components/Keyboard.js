import React, { useState } from "react";
import alien from "../assets/alien 1.png";
import scroll from "../assets/scroll.png";

const Keyboard = () => {
  const [theme, setTheme] = useState("writer");
  const [back, setBack] = useState(false);

  return (
    <div
      className={`${
        theme === "writer" ? "keyboard-writer" : "keyboard-modern"
      } h-full w-full rounded-xl relative flex flex-col items-center overflow-hidden`}
    >
      {/* <div
        className={`${
          theme === "writer"
            ? "iframe-container-border-writer"
            : "iframe-container-border-modern"
        } iframe-container-border`}
      > */}
      <div className="iframe-container">
        <iframe
          src={`https://keyboard-chi.vercel.app/#${theme}`}
          // src="https://linear.app/"
          height="960"
          width="1100"
          className="absolute"
        ></iframe>
      </div>
      <div className="flex 2xl:gap-16 xl:gap-16 gap-8 items-end mb-8 absolute bottom-0 z-50 ">
        <button
          className={`button-1 bg-black rounded-full flex justify-center items-center ${
            theme === "writer" ? "button-1-border" : ""
          }`}
          onClick={() => {
            setTimeout(() => {
              setBack(false);
            }, 0);
            setTheme("writer");
          }}
        >
          <img src={scroll} className="h-6 w-5" />
        </button>
        <button
          className={`button-2 bg-black rounded-full flex justify-center items-center ${
            theme === "modern" ? "button-2-border" : ""
          }`}
          onClick={() => {
            setTimeout(() => {
              setBack(false);
            }, 0);
            setTheme("modern");
          }}
        >
          <img src={alien} className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`${
          back === true ? "visible" : "hidden"
        } bg-black h-full w-full`}
      ></div>
    </div>
    // </div>
  );
};

export default Keyboard;
