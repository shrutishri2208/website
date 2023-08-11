import React from "react";
import Card from "./Card";
import { projects } from "../projects";

const CardsContainer = () => {
  return (
    <div className="cards-container">
      <div className="2xl:grid xl:grid 2xl:grid-cols-2 xl:grid-cols-2 flex flex-col 2xl:gap-16 xl:gap-16 gap-8">
        {/* {projects.map((item) => {
          return <Card {...item} key={item.id} />;
        })} */}
        <Card {...projects[0]} />
        <Card {...projects[1]} />
        <div></div>
        <Card {...projects[2]} />
      </div>
    </div>
  );
};

export default CardsContainer;
