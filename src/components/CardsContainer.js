import React from "react";
import Card from "./Card";

const CardsContainer = () => {
  const cardArray = [
    {
      id: 1,
      title: "Murk",
      tag: "Mobile Game",
    },
    {
      id: 2,
      title: "Pageplay",
      tag: "Chrome Extension",
    },
    {
      id: 3,
      title: "Keyboard",
      tag: "Web App",
    },
    {
      id: 4,
      title: "Wordwise",
      tag: "Chrome Extension",
    },
  ];
  return (
    <div className="cards-container pb-40">
      <div className="2xl:grid xl:grid 2xl:grid-cols-2 xl:grid-cols-2 flex flex-col 2xl:gap-16 xl:gap-16 gap-8">
        {cardArray.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
