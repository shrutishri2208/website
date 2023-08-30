import React, { useState, useRef, useEffect } from "react";
import alien from "../assets/alien-1.webp";
import scroll from "../assets/scroll.webp";

const Keyboard = () => {
  const [theme, setTheme] = useState("writer");
  const [back, setBack] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [iframeWidth, setIframeWidth] = useState(0.435);
  const [isVisible, setIsVisible] = useState(false);
  const [first, setFirst] = useState(false);

  const [load, setLoad] = useState(false);
  const iframe = useRef(null);
  const keyboard = useRef(null);

  useEffect(() => {
    let w = iframe.current.clientWidth;
    let width = w / 1100 + 0.02;
    setIframeWidth(width);
  });

  const getWidth = (e) => {
    let w = iframe.current.clientWidth;
    let width = w / 1100 + 0.1;
    setIframeWidth(width);
  };

  useEffect(() => {
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  useEffect(() => {
    // setFirst(false);
    if (isVisible === true && first === false) {
      setTimeout(() => {
        setIsLoading(false);
        setFirst(true);
      }, 1500);
    } else if (isVisible === true && first === true) {
      setTimeout(() => {
        setIsLoading(false);
      }, 700);
    } else {
      setIsLoading(true);
    }
  }, [isVisible, first]);

  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
      console.log("VISIBLE");
    } else {
      setIsVisible(false);
      console.log("NOT VISIBLE");
    }
  };
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (keyboard.current) {
      observer.observe(keyboard.current);
    }

    return () => {
      if (keyboard.current) {
        observer.unobserve(keyboard.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setLoad(true);
  };

  return (
    <div
      ref={keyboard}
      className={`${
        theme === "writer" ? "keyboard-writer" : "keyboard-modern"
      } h-full w-full rounded-2xl relative flex flex-col items-center overflow-hidden`}
    >
      {isLoading && (
        <div className="h-full w-full bg-black absolute z-50 flex justify-center items-center">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            className="keyboard-loader flex justify-center items-center  relative"
          >
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="none"
              stroke="white"
              strokeWidth="4"
              opacity="0.2"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              fill="none"
              stroke="white"
              strokeWidth="4"
              opacity="1"
              strokeDasharray="20 100"
            >
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="rotate"
                dur="1s"
                values="0 50 50; 180 50 50; 360 50 50"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      )}

      {/* <div className={`iframe-container`} ref={iframe}>
        <iframe
          onLoad={handleLoad}
          src={`https://keyboard-chi.vercel.app/#${theme}`}
          height="960"
          width="1100"
          className={`absolute ${load ? "iframe-display" : "iframe-hidden"}`}
          style={{ transform: `scale(${iframeWidth})` }}
        ></iframe> */}
      <div className={`iframe-container h-full w-full absolute`} ref={iframe}>
        <iframe
          onLoad={handleLoad}
          src={`https://keyboard-chi.vercel.app/#${theme}`}
          height="960"
          width="1100"
          className={`absolute ${load ? "iframe-display" : "iframe-hidden"}`}
          style={{ transform: `scale(${iframeWidth})` }}
        ></iframe>
      </div>
      <div className="flex 2xl:gap-16 xl:gap-16 gap-8 items-end mb-8 absolute -bottom-3 z-40 ">
        <button
          className={`button-1 bg-black rounded-full flex justify-center items-center ${
            theme === "writer" ? "button-1-border" : ""
          }`}
          onClick={() => {
            setTimeout(() => {
              setBack(false);
            }, 0);
            setTheme("writer");
          }}
        >
          <img src={scroll} className="h-6 w-5" />
        </button>
        <button
          className={`button-2 bg-black rounded-full flex justify-center items-center ${
            theme === "modern" ? "button-2-border" : ""
          }`}
          onClick={() => {
            setTimeout(() => {
              setBack(false);
            }, 0);
            setTheme("modern");
          }}
        >
          <img src={alien} className="h-6 w-6" />
        </button>
      </div>

      <div
        className={`${
          back === true ? "visible" : "hidden"
        } bg-black h-full w-full`}
      ></div>
    </div>
    // </div>
  );
};

export default Keyboard;
