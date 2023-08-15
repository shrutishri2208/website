import React from "react";
import netflix from "../assets/netflix.png";

const Netflix = () => {
  return (
    <div className="netflix h-full w-full rounded-2xl relative overflow-hidden">
      <img src={netflix} />
      {/* <img src={netflix1} alt="" className="scale-50" /> */}
    </div>
  );
};

export default Netflix;
