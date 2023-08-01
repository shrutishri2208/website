import React, { useState } from "react";

const ContactButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <button
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseOver={() => setHover(true)}
      className={`contact-button fixed bottom-10 right-8 bg-white bg-opacity-10 font-medium tracking-tight text-lg text-white px-3 py-2 rounded-full ${
        hover === true ? "" : ""
      }`}
    >
      Contact Me
    </button>
  );
};

export default ContactButton;
