import React from "react";
import profile from "../assets/profile.png";

const Header = () => {
  return (
    <div className="">
      {/* <div
        style={{ height: "2px", width: "100%", backgroundColor: "red" }}
      ></div> */}
      <div className="flex justify-between items-start">
        <p className="title relative bottom-8">Shruti</p>
        <img src="https://placehold.co/240" className="image"></img>
      </div>
    </div>
  );
};

export default Header;
