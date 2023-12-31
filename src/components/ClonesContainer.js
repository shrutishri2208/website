import React from "react";
import CloneCard from "./CloneCard";
import { clones } from "../projects";

const ClonesContainer = () => {
  return (
    <div className="clone-card-container 2xl:pt-16 xl:pt-16 2xl:pb-32 xl:pb-32 pb-0  ">
      <div className="2xl:flex 2xl:flex-row xl:flex xl:flex-row 2xl:gap-16 xl:gap-16 flex flex-col items-center gap-8 ">
        {clones.map((item) => {
          return <CloneCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default ClonesContainer;
