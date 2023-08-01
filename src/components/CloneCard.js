import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const CloneCard = ({ id, title }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        id === 1 ? "border-gradient-5" : id === 2 ? "border-gradient-6" : ""
      } border-gradient ${hover === true ? "scale-up" : "scale-down"}`}
    >
      <div
        className={`clone-card bg-black p-6 items-center gap-x-16 m-auto grid grid-cols-2 rounded-lg`}
      >
        <div
          className={`${
            id === 1 ? "bg-gradient-5" : id === 2 ? "bg-gradient-6" : ""
          } bg-gradient h-full w-full absolute z-0 bottom-5 right-4 ${
            hover === true ? "opacity-40" : "opacity-0"
          }`}
        ></div>

        <div className="flex-1 bg-white bg-opacity-10 h-full"></div>
        <div>
          <p
            className={`card-title font-medium ${
              id === 1 ? "text-colororg2" : id === 2 ? "text-colorred" : ""
            }`}
          >
            {title}
          </p>
          <div className="card-display flex-1 mb-4"></div>
          <p className="text-white text-md mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum ac libero sit amet efficitur. Nulla tristique, ex eget
            facilisis auctor, nisl dui.
          </p>
          <div className="card-header flex justify-between items-center mb-4 flex-1">
            <p className="text-white text-md opacity-30">Tag1, Tag2, Tag3</p>
            <div className="flex items-center gap-5">
              <button className="scale-110">
                <GitHubIcon className="scale-110" />
              </button>
              <button className="bg-white bg-opacity-10 font-medium tracking-tight text-lg text-white px-3 py-2 rounded-md">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloneCard;
