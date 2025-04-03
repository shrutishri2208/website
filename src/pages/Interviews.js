import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import BackArrow from "../components/BackArrow";
import Interviews1 from "../assets/Interviews1.mp4";
import Interviews2 from "../assets/Interviews2.mp4";

const Interviews = () => {
  return (
    <div className={"page_container sm:px-14"}>
      <BackArrow />
      <div
        className={"px-8 pb-4 justify-items-center flex flex-col items-center"}
      >
        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          AI Interviews
        </h1>
        <div className="justify-items-center gap-28 flex flex-col md:flex-row">
          <VideoPlayer src={Interviews1} />
          <VideoPlayer src={Interviews2} />
        </div>
      </div>
    </div>
  );
};

export default Interviews;
