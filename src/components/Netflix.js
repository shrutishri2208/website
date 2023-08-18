import React from "react";
import netflix from "../assets/netflix.webp";
import netflix2 from "../assets/netflix2.png";

const Netflix = () => {
  return (
    <div className="netflix h-full w-full rounded-2xl relative flex items-center justify-center overflow-hidden">
      <img src={netflix2} className="shrink-0" />
    </div>
  );
};

export default Netflix;
