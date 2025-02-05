import React from "react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start mb-28 ">
      <div>
        <h1 className="text-white text-4xl sm:text-6xl font-bold">
          Shruti Shrivastava
        </h1>
        <h2 className="text-white  text-2xl sm:text-4xl font-light text-opacity-80 mt-0 sm:mt-2">
          Frontend Engineer
        </h2>
        <h2 className="text-white text-2xl sm:text-4xl font-light text-opacity-40 mt-0 sm:mt-2">
          Bangalore, IN
        </h2>
      </div>
      <div className="self-end">
        <a
          href="https://github.com/shrutishri2208"
          target="_blank"
          rel="noreferrer"
        >
          <h6 className="text-blue-500 text-2xl sm:text-3xl font-normal mb-0 sm:mb-10 text-end">
            GitHub
          </h6>
        </a>
        <p className="body_text text-end">
          <span className="text-opacity-40 text-white">+91 </span>6351053824
        </p>
        <a href="mailto:shrutishri2208@gmail.com">
          <p className="body_text text-end">shrutishri2208@gmail.com</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
