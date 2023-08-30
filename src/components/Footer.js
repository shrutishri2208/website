import React from "react";
import FooterItem from "./FooterItem";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);
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
    <div className={`h-max w-screen relative z-50 overflow-hidden`}>
      <div
        className={`relative z-50  w-screen pb-6 ${
          theme === "light"
            ? "bg-black bg-opacity-5 text-black"
            : "bg-white bg-opacity-5 text-white"
        } `}
      >
        {socials.map((item, index) => {
          return <FooterItem {...item} key={index} />;
        })}
        {/* <p
          className={`${
            theme === "light"
              ? "text-black opacity-20"
              : "text-white opacity-10"
          }  text-center pt-6`}
        >
          <span style={{ position: "relative", top: "1.5px" }}>©</span> shruti
          shrivastava, 2023
        </p> */}
      </div>
    </div>
  );
};

export default Footer;
