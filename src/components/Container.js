import React from "react";
import Header from "./Header";
import CardsContainer from "./CardsContainer";
import ClonesContainer from "./ClonesContainer";
import SideProjectContainer from "./SideProjectContainer";

const Container = () => {
  return (
    <div className="container">
      <Header />
      <CardsContainer />
      <ClonesContainer />
      <SideProjectContainer />
    </div>
  );
};

export default Container;
