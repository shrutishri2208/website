import React, { useEffect, useState, useRef } from "react";

const VideoPlayer = ({ src }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setShowVideo(true);
    }, 200);
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className="h-screen justify-center items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-[560px] w-64 bg-black rounded-lg absolute" />

      <video
        ref={videoRef}
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
