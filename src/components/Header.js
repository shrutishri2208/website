import React from "react";
import profile from "../assets/profile.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-start">
        <img src={profile} className="image"></img>
        <p className="title">SHRUTI</p>
      </div>
    </div>
  );
};

export default Header;
