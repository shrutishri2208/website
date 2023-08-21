import React, { useState, useEffect } from "react";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import Loading from "./components/Loading";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (isLoading === true) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "scroll";
    }
  }, [isLoading]);

  return (
    <div
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
      <Container isLoading={isLoading} />
    </div>
  );
}

export default App;
