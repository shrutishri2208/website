import React, { useState, useEffect, useRef } from "react";
import Container from "./components/Container";
import { useSelector } from "react-redux";
import Gradient from "./components/Gradient";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={"bg-black h-full w-full px-12 py-8 "}>
      {/* <Gradient /> */}
      <Header />
      <Container isLoading={isLoading} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
