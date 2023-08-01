import React, { useState } from "react";
import Header from "./Header";
import CardsContainer from "./CardsContainer";
import ClonesContainer from "./ClonesContainer";
import SideProjectContainer from "./SideProjectContainer";
import ContactButton from "./ContactButton";

const Container = () => {
  return (
    <div className="container relative h-screen">
      <Header />
      <CardsContainer />
      <ClonesContainer />
      <SideProjectContainer />
      <ContactButton />
    </div>
  );
};

export default Container;
