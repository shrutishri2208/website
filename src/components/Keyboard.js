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
          height="960"
          width="1024"
          className="absolute"
        ></iframe>
      </div>
      <div className="flex gap-8 items-end mb-8 absolute bottom-0 z-50 ">
        {/* <div className={`rounded-full ${theme === "writer" ? "button-1" : ""}`}> */}
        <button
          className={`bg-black  h-10 w-10 rounded-full flex justify-center items-center ${
            theme === "writer" ? "button-1-border" : ""
          }`}
          onClick={() => {
            // setBack(true);
            setTimeout(() => {
              setBack(false);
            }, 0);
            setTheme("writer");
          }}
        >
          <img src={scroll} className="h-6 w-5" />
        </button>
        {/* </div> */}
        {/* <p className="text-white relative bottom-2">or</p> */}
        {/* <div
          className={`rounded-full p-0.5 ${
            theme === "modern" ? "button-2" : ""
          }`}
        > */}
        <button
          className={` bg-black h-10 w-10 rounded-full flex justify-center items-center ${
            theme === "modern" ? "button-2-border" : ""
          }`}
          onClick={() => {
            // setBack(true);
            setTimeout(() => {
              setBack(false);
            }, 0);
            setTheme("modern");
          }}
        >
          <img src={alien} className="h-6 w-6" />
        </button>
        {/* </div> */}
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
