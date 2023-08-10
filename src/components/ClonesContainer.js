import React from "react";
import CloneCard from "./CloneCard";

const ClonesContainer = () => {
  const cardArray = [
    {
      id: 1,
      title: "Zwiggy",
    },
    {
      id: 2,
      title: "Netflux",
    },
  ];

  return (
    <div className="2xl:mt-20 xl:mt-20 clones-container mb-4">
      <div className="2xl:flex 2xl:flex-row xl:flex xl:flex-row 2xl:gap-16 xl:gap-16 flex flex-col gap-8 ">
        {cardArray.map((item) => {
          return <CloneCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ClonesContainer;
