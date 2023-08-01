import React from "react";
import SideProjectCard from "./SideProjectCard";

const SideProjectContainer = () => {
  const cardArray = [
    {
      id: 1,
      title: "Title 1",
    },
    {
      id: 2,
      title: "Title 2",
    },
    {
      id: 3,
      title: "Title 3",
    },
    {
      id: 4,
      title: "Title 4",
    },
  ];
  return (
    <div>
      <div className="mt-16 grid grid-cols-2 text-right gap-x-12 mr-1">
        <p className="text-3xl font-medium">
          And, some more <br /> side projects
        </p>
        <p></p>
      </div>
      <div className="grid grid-cols-2 gap-16 mt-16">
        {cardArray.map((item) => {
          return <SideProjectCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default SideProjectContainer;
