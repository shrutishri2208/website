import React from "react";
import mockup from "../assets/mockup.webp";
import video1 from "../assets/1.mp4";
import gif from "../assets/2.gif";

const Swiggy = () => {
  return (
    <div className="swiggy h-full w-full rounded-2xl flex justify-center items-center relative">
      <img src={mockup} className="mockup rounded-2xl" />
      <div className="swiggy-container absolute flex justify-center items-center overflow-hidden ">
        <div className=" absolute  video-container overflow-hidden">
          {/* <video src={video1} controls muted loop className="relative"></video> */}
          <img src={gif} />
        </div>
      </div>
    </div>
  );
};

export default Swiggy;
