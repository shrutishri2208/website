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
      title: "WordWise",
      tag: "Chrome Extension",
    },
  ];
  return (
    <div className="pb-40 ">
      <div className="grid grid-cols-2 gap-16">
        {cardArray.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
