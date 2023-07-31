import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Card = ({ id, title }) => {
  return (
    <div className="border-gradient">
      <div
        className={`card relative bg-black p-6 justify-center m-auto rounded-lg ${
          id % 2 == 0 ? "move-up-1" : ""
        }`}
      >
        {id === 1 && (
          <div className="bg-gradient h-full w-full absolute z-0 bottom-10 right-4 opacity-70"></div>
        )}

        <div className="h-full flex flex-col relative z-10">
          <div className="card-header flex justify-between items-center mb-4">
            <p className="card-title font-medium">{title}</p>
            <div className="flex items-center gap-5">
              <button className="scale-110">
                <GitHubIcon className="scale-110" />
              </button>
              <button className="bg-black bg-opacity-25 font-medium tracking-tight text-lg text-white px-3 py-2 rounded-md">
                Download
              </button>
            </div>
          </div>
          <div className="card-display flex-1 mb-4 opacity-30"></div>
          <p className="text-white text-md mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum ac libero sit amet efficitur. Nulla tristique, ex eget
            facilisis auctor, nisl dui.
          </p>
          <p className="text-white text-md opacity-30">Tag1, Tag2, Tag3</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
