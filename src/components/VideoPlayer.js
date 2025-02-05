import React from "react";

const VideoPlayer = ({ src }) => {
  return (
    <div className="h-full justify-center items-center">
      <video className="h-[560px] w-auto rounded-lg" autoPlay loop muted>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
