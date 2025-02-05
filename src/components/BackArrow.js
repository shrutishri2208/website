import React from "react";
import { useNavigate } from "react-router-dom";

const BackArrow = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate("/");
      }}
      className="self-start h-20 w-20 opacity-0 sm:opacity-100"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#ffffff"
        viewBox="0 -960 960 960"
      >
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h887v80z" />
      </svg>
    </button>
  );
};

export default BackArrow;
