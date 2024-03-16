import React, { useState, useEffect } from "react";
import TextContainer from "./TextContainer";
import CardsContainer from "./CardsContainer";
import ClonesContainer from "./ClonesContainer";
import LandingPage from "./LandingPage";
import { setTheme } from "../redux/theme/themeActions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./Footer";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SideProjectContainer from "./SideProjectContainer";
import Gradient from "./Gradient";

const Container = ({ isLoading }) => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();
  return (
    <div
      className={`screen h-full w-full  ${
        theme === "light" ? " black-white" : " white-black"
      }`}
    >
      <div className={`container mx-auto relative z-40`}>
        <LandingPage isLoading={isLoading} />
        <CardsContainer />
        <TextContainer text={"clones"} index={2} />
        <ClonesContainer />
        <TextContainer text={"on the side"} index={3} />
        <SideProjectContainer />
      </div>
      <Footer />

      <a
        target="_blank"
        href="mailto:shrutishri2208@gmail.com"
        className={`work-button ${
          theme === "light" ? "work-button-light" : "work-button-dark"
        } ${
          isLoading === false ? "work-button-animation" : ""
        } cursor-pointer flex items-center opacity-0`}
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
        <p>Contact me</p>
      </a>

      <div
        className={`theme-toggle-button rounded-full px-3 py-1 flex justify-center items-center opacity-0 cursor-pointer relative ${
          isLoading === false ? "theme-button-animation" : ""
        } ${theme === "light" ? "theme-bg-light" : "theme-bg-dark"} `}
        onClick={() => {
          if (theme === "light") {
            dispatch(setTheme("dark"));
          } else {
            dispatch(setTheme("light"));
          }
        }}
      >
        {theme === "light" ? (
          <DarkModeIcon
            className="text-yellow-400 "
            style={{ color: "#ffbf00" }}
          />
        ) : (
          <LightModeIcon
            className="text-yellow-400 "
            style={{ color: "#ffbf00" }}
          />
        )}
      </div>
      <div
        className={`theme-bg ${
          theme === "light" ? "bg-open-light" : "bg-open-dark"
        } `}
      ></div>
    </div>
  );
};

export default Container;
