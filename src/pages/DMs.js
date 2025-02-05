import React from "react";
import BackArrow from "../components/BackArrow";
import VideoPlayer from "../components/VideoPlayer";
import DmsVideo from "../assets/Dms.mp4";

const DMs = () => {
  return (
    <div
      className={
        "bg-black h-full w-full flex flex-col min-h-screen pt-6 px-2 sm:px-14"
      }
    >
      <BackArrow />
      <div className={"px-8 pb-4"}>
        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          Direct Messaging
        </h1>
        <div className="justify-center gap-28  flex">
          <VideoPlayer src={DmsVideo} />
        </div>
      </div>
    </div>
  );
};

export default DMs;
