import React from "react";
import NewsVideo from "../assets/News.mp4";
import Pops from "../assets/Pops.mp4";
import CreatePops from "../assets/CreatePops.mp4";
import VideoPlayer from "../components/VideoPlayer";
import BackArrow from "../components/BackArrow";

const News = () => {
  return (
    <div
      className={
        "bg-black h-full w-full flex flex-col min-h-screen pt-6 px-2 sm:px-14 overflow-y-hidden"
      }
    >
      <BackArrow />
      <div className={"px-8 pb-4"}>
        <div className="justify-between gap-28 flex flex-col lg:flex-row ">
          {/* NEWS */}
          <div className="flex-col items-center justify-items-center">
            <h1 className="text-white text-4xl font-bold mb-8">News</h1>
            <VideoPlayer src={NewsVideo} />
          </div>
          {/* POPS */}
          <div className="justify-items-center">
            <h1 className="text-white text-4xl font-bold mb-8 text-center ">
              Pops
            </h1>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-24 justify-items-center">
              <VideoPlayer src={Pops} />
              <VideoPlayer src={CreatePops} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
