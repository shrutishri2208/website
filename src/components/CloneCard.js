import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const CloneCard = ({ id, title }) => {
  return (
    <div
      className={`clone-card bg-bg-grey p-6 items-center gap-x-16 m-auto grid grid-cols-2`}
    >
      <div className="flex-1"></div>
      <div>
        <div className="card-header flex justify-between items-center mb-4 flex-1">
          <p className="card-title font-medium">{title}</p>
          <div className="flex items-center gap-5">
            <button className="scale-110">
              <GitHubIcon className="scale-110" />
            </button>
            <button className="bg-white font-medium tracking-tight text-lg text-black px-3 py-2 rounded-button">
              Download
            </button>
          </div>
        </div>
        <div className="card-display flex-1 mb-4"></div>
        <p className="text-white text-md mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum ac libero sit amet efficitur. Nulla tristique, ex eget
          facilisis auctor, nisl dui.
        </p>
        <p className="text-white text-md opacity-30">Tag1, Tag2, Tag3</p>
      </div>
    </div>
  );
};

export default CloneCard;
