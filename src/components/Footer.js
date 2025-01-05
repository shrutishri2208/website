import React from "react";
import FooterItem from "./FooterItem";
import { useSelector } from "react-redux";

const Footer = () => {
  const socials = [
    {
      title: "linkedin",
      color: "#88D9FF",
      link: "https://www.linkedin.com/in/shruti-shrivastava-676606228/",
    },
    {
      title: "github",
      color: "#88FF9F",
      link: "https://github.com/shrutishri2208",
    },
    {
      title: "email",
      color: "#FF9685",
      link: "mailto:shrutishri2208@gmail.com?",
    },
  ];

  return (
    <div className={`h-max w-screen relative z-50 overflow-hidden bg-black`}>
      <div className={`relative w-screen pb-6 text-white `}>
        {socials.map((item, index) => {
          return <FooterItem {...item} key={index} />;
        })}
        <p className={`text-white opacity-40 text-center pt-6`}>
          <span style={{ position: "relative", top: "1px" }}>©</span> 2025
          Shruti Shrivastava
        </p>
      </div>
    </div>
  );
};

export default Footer;
