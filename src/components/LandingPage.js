import React from "react";
import profile from "../assets/profile.png";

const LandingPage = () => {
  return (
    <div className="">
      <div className="flex justify-end">
        <img
          src={profile}
          width={"280px"}
          height={"280px"}
          className="rounded-lg"
        ></img>
      </div>
      <div className="flex justify-between items-end">
        <div className="">
          <p className="heading relative bottom-20">
            Hi! I am <span className="heading-dark">Shruti</span>, <br />a
            developer who <br />
            <span className="heading-dark">loves to</span> design and <br />
            <span className="heading-dark">build</span> simple and <br />
            beautiful <span className="heading-dark">software</span>.
          </p>
        </div>
        <div
          className="work-button cursor-pointer relative"
          style={{ bottom: "5.5rem" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <circle opacity="0.3" cx="8" cy="8" r="8" fill="#22E765" />
            <circle cx="8" cy="8" r="3" fill="#22E765" />
          </svg>
          <p>Open for work</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
