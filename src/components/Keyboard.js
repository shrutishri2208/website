import React from "react";

const Keyboard = () => {
  return (
    <div className="keyboard h-full w-full rounded-2xl relative flex flex-col items-center overflow-hidden">
      <div>
        <button>Design-1</button>
        <button>Design-2</button>
      </div>
      <div className="iframe-container-border">
        <div className="iframe-container">
          <iframe
            src="https://keyboard-chi.vercel.app/"
            height="960"
            width="1024"
            className="absolute"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
