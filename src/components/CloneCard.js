import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";

const CloneCard = ({ id, title }) => {
  const [hover, setHover] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`clone-card ${
        theme === "light" ? "clone-card-light" : "clone-card-dark bg-red-500"
      } grid grid-cols-2 gap-12`}
    >
      <div className="clone-card-display"></div>
      <div className="flex flex-col gap-6">
        <div
          className={`clone-card-header  ${
            theme === "light"
              ? "clone-card-header-light"
              : "clone-card-header-dark"
          }`}
        >
          <h1>{title}</h1>
        </div>
        <div
          className={`clone-card-body ${
            theme === "light" ? "clone-card-body-light" : "clone-card-body-dark"
          }`}
        >
          <h2 className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            elementum ac libero sit amet efficitur. Nulla tristique, ex eget
            facilisis auctor, nisl dui.
          </h2>
          <div className="flex justify-between items-center">
            <p>Tag 1, Tag 2, Tag 3</p>
            <div className="flex items-center gap-4">
              <div
                className={`github-button ${
                  theme === "light"
                    ? "github-button-light"
                    : "github-button-dark"
                } scale-150 mb-1`}
              >
                <GitHubIcon />
              </div>
              <div className="download-button">
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  {/* <KeyboardArrowLeftIcon /> */}
                  <span>Download</span>
                  {/* <KeyboardArrowRightIcon className="" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloneCard;
