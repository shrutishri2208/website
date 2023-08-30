import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovingFooter from "./MovingFooter";

const FooterItem = ({ title, color, link }) => {
  const theme = useSelector((state) => state.theme.theme);
  const myArray = Array.from({ length: 100 }, (_, index) => index);
  return (
    <a className="footer-item relative cursor-pointer" href={link}>
      <div className="flex justify-between items-center 2xl:px-32 xl:px-32 px-8">
        <p className="py-10 text-2xl font-semibold border-b-white border-b-1">
          {title}
        </p>
        <a href={link} target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M14 15C18.6863 15 21.3137 15 26 15V27"
              stroke={`${theme === "light" ? "black" : "white"}`}
              strokeWidth={2}
            />
            <path
              d="M26 15L14 27"
              stroke={`${theme === "light" ? "black" : "white"}`}
              strokeWidth={2}
            />
          </svg>
        </a>
      </div>
      {/* <div className="footer-item-bg " style={{ backgroundColor: `${color}` }}>
        <div className="flex gap-8 flex-nowrap h-full moving-footer ">
          {myArray.map((item, index) => {
            return <MovingFooter title={title} link={link} key={index} />;
          })}
        </div>
      </div> */}
    </a>
  );
};

export default FooterItem;
