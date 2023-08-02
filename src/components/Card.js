import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardDisplay from "./CardDisplay";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Card = ({ id, title }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        id === 1
          ? "border-gradient-1"
          : id === 2
          ? "border-gradient-2"
          : id === 3
          ? "border-gradient-3"
          : "border-gradient-4"
      } border-gradient ${id % 2 === 0 ? "move-up-1" : ""} ${
        hover === true ? "scale-up" : "scale-down"
      }`}
    >
      <div
        className={`card relative bg-black p-6 justify-center m-auto rounded-lg`}
      >
        <div
          className={`${
            id === 1
              ? "bg-gradient-1"
              : id === 2
              ? "bg-gradient-2"
              : id === 3
              ? "bg-gradient-3"
              : "bg-gradient-4"
          } bg-gradient h-full w-full absolute z-0 bottom-10 right-4 ${
            hover === true ? "opacity-50" : "opacity-0"
          }`}
        ></div>

        <div className="h-full flex flex-col relative z-10">
          <p
            className={`card-title font-medium ${
              id === 1
                ? "text-colorblue"
                : id === 2
                ? "text-coloryellow"
                : id === 3
                ? "text-colororange"
                : "text-colorviolet"
            }`}
          >
            {title}
          </p>
          <div className="flex-1 mb-4 bg-opacity-10 bg-white w-full">
            <CardDisplay />
          </div>
          <p className="text-white text-md mb-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum ac libero sit amet efficitur. Nulla tristique, ex eget
            facilisis auctor, nisl dui.
          </p>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-md opacity-30">Tag1, Tag2, Tag3</p>
            <div className="flex items-center gap-5">
              <button className="scale-110">
                <GitHubIcon className="scale-110" />
              </button>
              {/* <button className="bg-white bg-opacity-10 font-medium tracking-tight text-lg text-white px-4 py-2 rounded-md items-center flex gap-x-4 pr-2 w-36">
                Download
                <ArrowForwardIcon className="relative " />
              </button> */}
              <div className="bg-white bg-opacity-10 rounded-md">
                <p className="bg-red-300 bg-opacity-10 relative left-4 font-medium tracking-tight text-lg text-white px-4 py-2 items-center flex gap-x-4 pr-2 w-36">
                  Download <ArrowForwardIcon className="relative " />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
