import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import CardDisplay from "./CardDisplay";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const Card = ({ id, title, tag }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className={`card flex ${id % 2 === 1 ? "relative top-44" : ""}`}>
      <div className="card-header flex justify-between items-center w-full">
        <h1 className="">{title}</h1>

        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle cx="8" cy="8" r="8" fill="#0075FF" />
          </svg>
          <p className="">{tag}</p>
        </div>
      </div>
      <div className="card-display flex-1"></div>
      <div className="card-body">
        <h2 className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          elementum ac libero sit amet efficitur. Nulla tristique, ex eget
          facilisis auctor, nisl dui.
        </h2>
        <div className="flex justify-between items-center">
          <p>Tag 1, Tag 2, Tag 3</p>
          <div className="flex items-center gap-4">
            <div className="github-button">
              <GitHubIcon />
            </div>
            <div className="download-button">
              <div className="flex items-center justify-center gap-1 ">
                {/* <KeyboardArrowLeftIcon /> */}
                <span>Download</span>
                {/* <KeyboardArrowRightIcon className="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
