import React from "react";
import LandingPage from "./LandingPage";
import { useDispatch } from "react-redux";
import Footer from "./Footer";
import TextContainer from "./TextContainer";

const Container = ({ isLoading }) => {
  return (
    <div>
      <LandingPage isLoading={isLoading} />
      <TextContainer text={"Projects"} />
    </div>
  );
};

export default Container;
