import React from "react";
import SideProjectCard from "./SideProjectCard";
import { sides } from "../projects";
const SideProjectContainer = () => {
  return (
    <div className="side-card-container 2xl:pt-20 xl:pt-20 pb-32 ">
      <div className="2xl:grid xl:grid 2xl:grid-cols-2 xl:grid-cols-2 flex flex-col items-center 2xl:gap-16 xl:gap-16 gap-8">
        {sides.map((item) => {
          return <SideProjectCard {...item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default SideProjectContainer;
