import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/theme/themeActions";

const ToggleButton = () => {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className="theme-toggle-container h-full w-full">
      <div
        className={`theme-toggle-bg ${
          theme === "light" ? "bg-open-light" : "bg-open-dark"
        }`}
      ></div>
      <button
        className="uppercase text-black bg-yellow-400 rounded-full px-3 py-1"
        onClick={() => {
          if (theme === "light") {
            dispatch(setTheme("dark"));
          } else {
            dispatch(setTheme("light"));
          }
        }}
      >
        {theme === "light" ? "D" : "L"}
      </button>
    </div>
  );
};

export default ToggleButton;
