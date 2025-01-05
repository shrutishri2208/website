import React from "react";
import { useSelector } from "react-redux";

const FooterItem = ({ title, color, link }) => {
  return (
    <a
      className="footer-item relative h-full w-full "
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <a
        className="flex justify-between items-center 2xl:px-32 xl:px-32 px-8"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <p className="py-10 text-2xl font-semibold ">{title}</p>
        <div
          className="footer-bg w-full flex 2xl:px-32 xl:px-32 px-8 justify-between items-center"
          style={{ backgroundColor: `${color}` }}
        >
          <p className="text-2xl font-semibold ">{title}</p>
          <a href={link} target="_blank" rel="noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                d="M14 15C18.6863 15 21.3137 15 26 15V27"
                stroke={"white"}
                strokeWidth={2}
              />
              <path d="M26 15L14 27" stroke={"white"} strokeWidth={2} />
            </svg>
          </a>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="60"
            height="60"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              d="M14 15C18.6863 15 21.3137 15 26 15V27"
              stroke={"white"}
              strokeWidth={2}
            />
            <path d="M26 15L14 27" stroke={"white"} strokeWidth={2} />
          </svg>
        </a>
      </a>
    </a>
  );
};

export default FooterItem;
