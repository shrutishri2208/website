import React, { useState, useRef, useEffect } from "react";
import youtube from "../assets/youtube.png";
import article from "../assets/article.png";

const Pageplay = () => {
  const [lever, setLever] = useState(70);
  const [isDragging, setIsDragging] = useState(true);

  const divRef = useRef(null);

  const handleLeverDrag = (e) => {
    const containerWidth = e.target.parentNode.offsetWidth;
    const position = e.clientX - divRef.current.getBoundingClientRect().left;
    const newPosition = (position / containerWidth) * 100;
    setLever(newPosition);
    console.log("NEW POSITION: ", newPosition);
  };
  console.log("LEVER: ", lever);
  const trial = 10;

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (e) => {
    if (!isDragging) return;
    const containerWidth = e.target.parentNode.offsetWidth;
    const position = e.clientX - divRef.current.getBoundingClientRect().left;
    const newPosition = (position / containerWidth) * 100;
    setLever(newPosition);
    console.log("POSITION:", newPosition);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={divRef}
      className="relative h-full w-full overflow-hidden rounded-2xl"
    >
      <img src={article} className="absolute w-full h-full " />
      <div
        className="h-full w-full parent absolute overflow-hidden"
        style={{ width: `${lever}%` }}
      >
        <img src={youtube} className="youtube-image" />
      </div>
      <div
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        className=" h-full w-full z-50 overflow-hidden"
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
