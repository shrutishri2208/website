import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";

const CloneCard = ({ id, title, desc, tech, githubLink }) => {
  const [hover, setHover] = useState(false);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`clone-card ${
        theme === "light" ? "clone-card-light" : "clone-card-dark bg-red-500"
      } flex flex-col`}
    >
      <div
        className={`clone-card-header  ${
          theme === "light"
            ? "clone-card-header-light"
            : "clone-card-header-dark"
        }`}
      >
        <h1>{title}</h1>
      </div>
      <div className="clone-card-display flex-1"></div>

      <div
        className={`clone-card-body ${
          theme === "light" ? "clone-card-body-light" : "clone-card-body-dark"
        }`}
      >
        <h2 className="mb-4">{desc}</h2>
        <div className="flex justify-between items-center">
          <p>{tech}</p>
          <div className="flex items-center gap-4">
            <div
              className={`github-button ${
                theme === "light" ? "github-button-light" : "github-button-dark"
              } scale-150 mb-1`}
            >
              <a href={githubLink}>
                <GitHubIcon />
              </a>
            </div>
            {/* <div
              className={`${
                theme === "light"
                  ? "download-button-light"
                  : "download-button-dark"
              } download-button`}
            >
              <div className="flex items-center justify-center gap-2 cursor-pointer">
                <span>Download</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloneCard;
