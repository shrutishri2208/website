import React from "react";
import Container from "./components/Container";
// import { useSelector } from "react-redux";

function App() {
  // const theme = useSelector((state) => state.theme.theme);
  return (
    // <div className={`App ${theme === "light" ? "dark-light" : "light-dark"}`}>
    //   <h1 className="text-black z-50 fixed top-0">HELLO</h1>
    //
    // </div>
    <div className="app">
      <Container />
    </div>
  );
}

export default App;
