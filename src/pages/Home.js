import React from "react";
import Header from "../components/Header";
import Contents from "../components/Contents";

const Home = () => {
  return (
    <div
      className={
        "bg-black h-full w-full pt-14 px-8 lg:px-14 pb-4 overscroll-none"
      }
    >
      <Header />
      <Contents />
    </div>
  );
};

export default Home;
