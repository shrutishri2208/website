import React from "react";
import VideoPlayer from "../components/VideoPlayer";
import SalaryCreation from "../assets/SalaryCreation.mp4";
import SalaryFilter from "../assets/SalaryFilter.mp4";
import BackArrow from "../components/BackArrow";

const Salaries = () => {
  return (
    <div
      className={
        "bg-black h-full w-full flex flex-col min-h-screen pt-10 px-14"
      }
    >
      <BackArrow />
      <div className={"pt-7 px-14 pb-4"}>
        <h1 className="text-white text-5xl font-bold mb-16">Salaries</h1>
        <div className="justify-center gap-28  flex">
          <VideoPlayer src={SalaryCreation} />
          <VideoPlayer src={SalaryFilter} />
        </div>
      </div>
    </div>
  );
};

export default Salaries;
