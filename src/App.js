import React from "react";
import Container from "./components/Container";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <div className={`App ${theme === "light" ? "dark-light" : "light-dark"}`}>
      <Container />
    </div>
  );
}

export default App;
