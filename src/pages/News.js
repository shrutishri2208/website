import React from "react";
import NewsVideo from "../assets/News.mp4";
import Pops from "../assets/Pops.mp4";
import PopsCreate from "../assets/PopsCreate.MP4";
import VideoPlayer from "../components/VideoPlayer";
import BackArrow from "../components/BackArrow";

const News = () => {
  return (
    <div
      className={
        "bg-black h-full w-full flex flex-col min-h-screen pt-10 px-14"
      }
    >
      <BackArrow />
      <div className={"pt-7 px-14 pb-4"}>
        <div className="flex justify-between">
          <h1 className="text-white text-5xl font-bold mb-16">News Platform</h1>
          <h1 className="text-white text-5xl font-bold mb-16">Pops</h1>
        </div>
        <div className="justify-between gap-28 flex ">
          <div className="flex  justify-items-start">
            <VideoPlayer src={NewsVideo} />
          </div>
          <div className="flex justify-end gap-24">
            <VideoPlayer src={Pops} />
            <VideoPlayer src={PopsCreate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
