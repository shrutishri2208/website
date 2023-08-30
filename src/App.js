import React, { useState, useEffect, useRef } from "react";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";
import Gradient from "./components/Gradient";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const appref = useRef(null);

  useEffect(() => {
    if (appref.current) {
    }
  });

  return (
    <div
      ref={appref}
      className={`App relative ${
        theme === "light" ? "dark-light" : "light-dark"
      }`}
    >
      {isLoading && (
        <div
          className={`bg-black h-screen w-screen absolute top-0 flex justify-center items-center text-white loader-animation
          }`}
          style={{ zIndex: "100" }}
        >
          <div className="bg-white h-0 w-0 absolute rounded-full"></div>
        </div>
      )}
      <Gradient />
      <Container isLoading={isLoading} />
    </div>
  );
}

export default App;
