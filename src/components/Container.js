import React, { useState } from "react";
import CardsContainer from "./CardsContainer";
import ClonesContainer from "./ClonesContainer";
import LandingPage from "./LandingPage";
import { setTheme } from "../redux/theme/themeActions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const Container = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div
      className={`screen h-full w-full  ${
        theme === "light" ? " black-white" : " white-black"
      }`}
    >
      <div className={`container mx-auto relative z-50`}>
        <LandingPage />
        <CardsContainer />
        <ClonesContainer />
      </div>
      {/* <Footer /> */}

      <div
        className={`work-button ${
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
        <p>Open to work</p>
      </div>
      <button
        className="theme-toggle-button rounded-full px-3 py-1 flex justify-center items-center"
        onClick={() => {
          if (theme === "light") {
            dispatch(setTheme("dark"));
          } else {
            dispatch(setTheme("light"));
          }
        }}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </button>
      <div
        className={`theme-bg ${
          theme === "light" ? "bg-open-light" : "bg-open-dark"
        }`}
      ></div>
    </div>
  );
};

export default Container;
