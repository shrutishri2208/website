import React, { useEffect } from "react";
import Card from "./Card";
import { projects } from "../projects";

const CardsContainer = () => {
  return (
    <div className="cards-container 2xl:pb-32 xl:pb-32 pb-0 ">
      <div className="2xl:grid xl:grid 2xl:grid-cols-2 xl:grid-cols-2 flex flex-col items-center 2xl:gap-16 xl:gap-16 gap-8">
        <Card {...projects[0]} />
        <Card {...projects[1]} />
      </div>
    </div>
  );
};

export default CardsContainer;
