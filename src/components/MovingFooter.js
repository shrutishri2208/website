import React from "react";
import { useSelector } from "react-redux";

const MovingFooter = ({ title }) => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="moving-footer-items flex items-center gap-7 h-full w-full">
      <p className="text-2xl text-black relative">{title}</p>
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
          strokeWidth={1}
        />
        <path d="M26 15L14 27" stroke="black" strokeWidth={1} />
      </svg>
    </div>
  );
};

export default MovingFooter;
