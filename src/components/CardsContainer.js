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
    <div className="relative bottom-44">
      <div className="mt-16 grid grid-cols-2 text-right gap-x-12 mr-1">
        <p className="text-5xl font-medium text-left">
          I love to design and <br /> develop beatiful software
        </p>
        {/* <p className="text-5xl font-medium text-left">
          Hi, I am <span className="text-3l">Shruti</span> <br />
          I love to design and <br /> develop beatiful software
        </p> */}
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
