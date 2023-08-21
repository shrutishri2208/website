import React from "react";
import { useSelector } from "react-redux";

const MovingFooter = ({ title, link }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <a
      className="moving-footer-items flex items-center gap-7 h-full w-full"
      href={link}
      target="_blank"
    >
      <p className="text-2xl text-black relative font-semibold">{title}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 40 40"
        fill="none"
      >
        <path
          d="M14 15C18.6863 15 21.3137 15 26 15V27"
          stroke="black"
          strokeWidth={2}
        />
        <path d="M26 15L14 27" stroke="black" strokeWidth={2} />
      </svg>
    </a>
  );
};

export default MovingFooter;
