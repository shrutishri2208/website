import React from "react";
import Card from "./Card";

const CardsContainer = () => {
  const cardArray = [
    {
      id: 1,
      title: "Murk",
    },
    {
      id: 2,
      title: "Pageplay",
    },
    {
      id: 3,
      title: "Keyboard",
    },
    {
      id: 4,
      title: "WordWise",
    },
  ];
  return (
    <div>
      <div className="mt-16 grid grid-cols-2 text-right gap-x-12 mr-1">
        <p className="text-3xl font-medium">
          I love to design and <br /> develop beatiful softwares
        </p>
        <p></p>
      </div>
      <div className="grid grid-cols-2 gap-16 mt-8">
        {cardArray.map((item) => {
          return <Card {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default CardsContainer;
