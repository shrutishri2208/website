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
    <div className="mt-28">
      {/* <div className="grid grid-cols-2 text-right gap-x-16 mr-1 -mb-2">
        <p></p>
        <p className="move-up-2 text-3xl font-medium text-left ">
          I sometimes make clones of apps.
          <br />I like to practice my skills.
        </p>
      </div> */}
      <div className="flex flex-col gap-16">
        {cardArray.map((item) => {
          return <CloneCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ClonesContainer;