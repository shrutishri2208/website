import React from "react";
import BackArrow from "../components/BackArrow";
import VideoPlayer from "../components/VideoPlayer";
import OnboardingVideo from "../assets/Onboarding.mp4";

const Onboarding = () => {
  return (
    <div
      className={
        "bg-black h-full w-full flex flex-col min-h-screen pt-10 px-14"
      }
    >
      <BackArrow />
      <div className={"pt-7 px-14 pb-4"}>
        <h1 className="text-white text-5xl font-bold mb-16">App Onboarding</h1>
        <div className="justify-center gap-28  flex">
          <VideoPlayer src={OnboardingVideo} />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
