import React from "react";
import SideProjectCard from "./SideProjectCard";
const SideProjectContainer = () => {
  const cardArray = [
    {
      id: 1,
      title: "Project-1",
    },
    {
      id: 2,
      title: "Project-2",
    },
    {
      id: 3,
      title: "Project-3",
    },
    {
      id: 4,
      title: "Project-4",
    },
  ];

  return (
    <div className="my-24">
      <div className="2xl:grid xl:grid 2xl:grid-cols-2 xl:grid-cols-2 flex flex-col 2xl:gap-16 xl:gap-16 gap-8">
        {cardArray.map((item) => {
          return <SideProjectCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default SideProjectContainer;
