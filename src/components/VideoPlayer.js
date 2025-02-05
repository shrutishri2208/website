import React, { useEffect, useState } from "react";

const VideoPlayer = ({ src }) => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true);
    }, 200);
  }, []);

  return (
    <div className="h-screen justify-center items-center">
      <div className="h-[560px] w-64 bg-black rounded-lg absolute" />

      <video
        className={`h-[560px] w-auto rounded-lg relative z-10 transition-opacity duration-500 ${
          showVideo ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
