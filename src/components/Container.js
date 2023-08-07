import React, { useState } from "react";
import Header from "./Header";
import CardsContainer from "./CardsContainer";
import ClonesContainer from "./ClonesContainer";
import SideProjectContainer from "./SideProjectContainer";
import ContactButton from "./ContactButton";
import LandingPage from "./LandingPage";
import TextContainer from "./TextContainer";

import { useSelector } from "react-redux";

const Container = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    // <div
    //   className={`screen h-full w-full ${
    //     theme === "light" ? "black-white" : "white-black"
    //   }`}
    // >
    <div
      className={`screen h-full w-full ${
        theme === "light" ? "bg-black black-white" : "bg-white white-black"
      }`}
    >
      <div className={`container p-16 my-0 mx-auto`}>
        <LandingPage />
        {/* <TextContainer index={1} text="projects" /> */}
        <CardsContainer />
        <TextContainer index={2} text="clones" />
        <ClonesContainer />
        <TextContainer index={3} text="on the side" />
        <SideProjectContainer />
      </div>
    </div>
  );
};

export default Container;
