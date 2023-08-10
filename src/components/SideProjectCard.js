import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useSelector } from "react-redux";

const SideProjectCard = ({ id, title }) => {
  const [hover, setHover] = useState(false);

  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`side-card ${
        theme === "light" ? "card-light" : "card-dark"
      } flex justify-between items-center gap-6 ${
        id % 2 === 1 ? "relative top-1/2" : ""
      }`}
    >
      <div className="side-card-display " style={{ flex: "1" }}></div>
      <div className="flex flex-col gap-1 " style={{ flex: "2" }}>
        <div
          className={`side-card-header ${
            theme === "light"
              ? "side-card-header-light"
              : "side-card-header-dark"
          }`}
        >
          <h1>{title}</h1>
        </div>
        <div
          className={`side-card-body ${
            theme === "light" ? "side-card-body-light" : "side-card-body-dark"
          }`}
        >
          <h2 className="mb-1">
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
          </h2>
          <div className="flex justify-between items-center">
            <p>Tag 1, Tag 2, Tag 3</p>
            <div className="flex items-center gap-4">
              <div
                className={`github-button ${
                  theme === "light"
                    ? "github-button-light"
                    : "github-button-dark"
                } scale-125 relative bottom-1`}
              >
                <GitHubIcon />
              </div>
              <div
                className={`download-button-2 bottom-1 ${
                  theme === "light"
                    ? "download-button-2-light"
                    : "download-button-2-dark"
                }`}
              >
                <div className="flex items-center justify-center gap-1 cursor-pointer">
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

export default SideProjectCard;
