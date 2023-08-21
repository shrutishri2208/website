import React from "react";

const Loading = () => {
  return (
    <div
      className="bg-black h-screen w-screen absolute top-0 flex justify-center items-center text-white"
      style={{ zIndex: "100" }}
    >
      <p className="text-6xl ">LOADING</p>
    </div>
  );
};

export default Loading;
