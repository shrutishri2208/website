import React from "react";
import FooterItem from "./FooterItem";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme);
  const socials = [
    {
      title: "linkedin",
      color: "#88D9FF",
    },
    {
      title: "github",
      color: "#88FF9F",
    },
    {
      title: "email",
      color: "#FF9685",
    },
  ];

  return (
    <div
      className={`${
        theme === "light" ? "" : ""
      } h-max w-screen relative z-50 mt-96`}
    >
      <div
        className={`relative z-50  w-screen pb-6 ${
          theme === "light"
            ? "bg-black bg-opacity-5 text-black"
            : "bg-white bg-opacity-10 text-white"
        } `}
      >
        {socials.map((item) => {
          return <FooterItem {...item} />;
        })}
        <p
          className={`${
            theme === "light"
              ? "text-black opacity-20"
              : "text-white opacity-10"
          }  text-center pt-6`}
        >
          made by shruti shrivastava
        </p>
      </div>
    </div>
  );
};

export default Footer;
