import React, { useState } from "react";
import Header from "./Header";
import CardsContainer from "./CardsContainer";
import ClonesContainer from "./ClonesContainer";
import SideProjectContainer from "./SideProjectContainer";
import ContactButton from "./ContactButton";
import LandingPage from "./LandingPage";
import TextContainer from "./TextContainer";
import { setTheme } from "../redux/theme/themeActions";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";

const Container = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`screen h-full w-full ${
        theme === "light" ? " black-white" : " white-black"
      }`}
    >
      <div className="flex justify-between fixed-header w-screen fixed top-0 ">
        <div className="theme-toggle-container">
          <div
            className={`theme-toggle-bg ${
              theme === "light" ? "bg-open-light" : "bg-open-dark"
            }`}
          ></div>
          <button
            className="uppercase text-black  rounded-full px-3 py-1"
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

        <div
          className={`work-button  ${
            theme === "light" ? "work-button-light" : "work-button-dark"
          } cursor-pointer flex items-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle
              cx="8"
              cy="8"
              r="8"
              fill={`${theme === "light" ? "#22E76566" : "#00000055"}`}
            />
            <circle
              cx="8"
              cy="8"
              r="3"
              fill={`${theme === "light" ? "#22E765" : "#000"}`}
            />
          </svg>
          <p>Open for work</p>
        </div>
      </div>

      <div className={`container mx-auto `}>
        <LandingPage />
        {/* <TextContainer index={1} text="projects" /> */}
        <CardsContainer />
        {/* <TextContainer index={2} text="clones" /> */}
        <ClonesContainer />
        {/* <TextContainer index={3} text="on the side" /> */}
        <SideProjectContainer />
      </div>
    </div>
  );
};

export default Container;
