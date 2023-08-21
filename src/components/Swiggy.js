import React from "react";
import mockup from "../assets/mockup.webp";
import video1 from "../assets/2.mp4";

const Swiggy = () => {
  return (
    <div className="swiggy h-full w-full rounded-2xl flex justify-center items-center relative">
      <img src={mockup} className="mockup rounded-2xl" />
      <div className="swiggy-container absolute flex justify-center items-center overflow-hidden ">
        <div className=" absolute  video-container overflow-hidden">
          <video src={video1} autoPlay loop muted className="relative"></video>
        </div>
      </div>
    </div>
  );
};

export default Swiggy;
