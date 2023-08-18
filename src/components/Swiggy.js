import React from "react";
import mockup from "../assets/mockup.png";
import video1 from "../assets/2.mp4";

const Swiggy = () => {
  return (
    <div className="swiggy h-full w-full rounded-2xl flex justify-center items-center relative">
      <img src={mockup} className=" mockup" />
      <div className="swiggy-container absolute flex justify-center items-center overflow-hidden  ">
        <div className=" absolute overflow-hidden video-container ">
          <video src={video1} autoPlay loop muted className="relative"></video>
        </div>
      </div>
    </div>
  );
};

export default Swiggy;
