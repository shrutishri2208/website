import React from "react";
import Card from "./Card";
import { projects } from "../projects";

const CardsContainer = () => {
  return (
    <div className="cards-container 2xl:pb-40 xl:pb-40 mb-4 ">
      <div className="2xl:grid xl:grid 2xl:grid-cols-2 xl:grid-cols-2 flex flex-col 2xl:gap-16 xl:gap-16 gap-8">
        {projects.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
