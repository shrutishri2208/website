import React from "react";
import BackArrow from "../components/BackArrow";
import VideoPlayer from "../components/VideoPlayer";
import OnboardingVideo from "../assets/Onboarding.mp4";

const Onboarding = () => {
  return (
    <div className={"page_container sm:px-14"}>
      <BackArrow />
      <div className={"px-8 pb-4"}>
        <h1 className="text-white text-4xl font-bold mb-8 text-center">
          App Onboarding
        </h1>
        <div className="justify-center gap-28  flex">
          <VideoPlayer src={OnboardingVideo} />
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
