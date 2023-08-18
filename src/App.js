import React from "react";
import Container from "./components/Container";
import ToggleButton from "./components/ToggleButton";
import { useSelector, useDispatch } from "react-redux";

import { setTheme } from "./redux/theme/themeActions";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  window.onload = () => {
    const loadTime = new Date() - window.performance.timing.navigationStart;
    console.log(`Page load time: ${loadTime} ms`);
  };

  return (
    <div className={`App ${theme === "light" ? "dark-light" : "light-dark"}`}>
      <Container />
    </div>
  );
}

export default App;
