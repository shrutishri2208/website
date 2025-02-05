import React from "react";
import NewsVideo from "../assets/News.mp4";
import Pops from "../assets/Pops.mp4";
import CreatePops from "../assets/CreatePops.mp4";
import VideoPlayer from "../components/VideoPlayer";
import BackArrow from "../components/BackArrow";

const News = () => {
  return (
    <div className={"page_container sm:px-14"}>
      <BackArrow />
      <div className={"px-8 pb-4 "}>
        <div>
          <div className="flex-col flex items-center justify-items-center ">
            <h1 className="text-white text-4xl font-bold mb-8 text-center">
              News
            </h1>
            <div className="flex flex-col md:flex-row gap-8 sm:gap-24 justify-items-center">
              <VideoPlayer src={NewsVideo} />
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
