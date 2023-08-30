import React, { useState, useRef, useEffect } from "react";
import youtube from "../assets/youtube.webp";
import article from "../assets/article.webp";

const Pageplay = () => {
  const [lever, setLever] = useState(70);
  const [isDragging, setIsDragging] = useState(true);

  const divRef = useRef(null);

  const handleDrag = (e) => {
    if (!isDragging) return;
    const containerWidth = e.target.parentNode.offsetWidth;
    const position = e.clientX - divRef.current.getBoundingClientRect().left;
    const newPosition = (position / containerWidth) * 100;
    setLever(newPosition);
  };

  const handleTouch = (e) => {
    if (!isDragging) return;
    const containerWidth = e.target.parentNode.offsetWidth;
    const position =
      e.touches[0].clientX - divRef.current.getBoundingClientRect().left;
    const newPosition = (position / containerWidth) * 100;
    setLever(newPosition);
  };

  return (
    <div
      ref={divRef}
      className="relative h-full w-full rounded-2xl overflow-hidden "
    >
      <img
        src={article}
        className="absolute w-full"
        // style={{ minWidth: "80vw", height: "58vw" }}
      />
      <div
        className="h-full w-full absolute overflow-hidden "
        style={{ width: `${lever}%` }}
      >
        <img src={youtube} className="youtube-image" />
      </div>
      <div
        onMouseMove={handleDrag}
        onTouchMove={handleTouch}
        className=" h-full w-full z-50 cursor-grab opacity-90"
      >
        <div
          className="lever"
          style={{ left: `calc(${lever}% - 5px)` }}
          // onMouseDown={handleDragStart}
        ></div>
      </div>
    </div>
  );
};

export default Pageplay;
