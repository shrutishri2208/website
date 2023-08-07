import React from "react";
import Container from "./components/Container";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    // <div
    //   className={`App ${
    //     theme === "light" ? "change-bg-white" : "change-bg-black"
    //   }`}
    // >
    <div
      className={`App ${
        theme === "light" ? "change-bg-white" : "change-bg-black"
      }`}
    >
      {/* <div className="contact-button w-screen h-12 fixed top-0"></div> */}
      <Container />
    </div>
  );
}

export default App;
