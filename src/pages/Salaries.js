import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import SalaryCreation from "../assets/SalaryCreation.mp4";
import SalaryFilter from "../assets/SalaryFilter.mp4";
import BackArrow from "../components/BackArrow";

const Salaries = () => {
  return (
    <div
      className={
        "bg-black h-full w-full flex flex-col min-h-screen pt-6 px-2 sm:px-14"
      }
    >
      <BackArrow />
      <div className={"px-8 pb-4 justify-items-center"}>
        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          Salaries
        </h1>
        <div className="justify-items-center gap-28 flex flex-col md:flex-row">
          <VideoPlayer src={SalaryCreation} />
          <VideoPlayer src={SalaryFilter} />
        </div>
      </div>
    </div>
  );
};

export default Salaries;
