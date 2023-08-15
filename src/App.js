import React from "react";
import Container from "./components/Container";
import ToggleButton from "./components/ToggleButton";
import { useSelector, useDispatch } from "react-redux";

import { setTheme } from "./redux/theme/themeActions";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  return (
    <div className={`App ${theme === "light" ? "dark-light" : "light-dark"}`}>
      <Container />
    </div>
  );
}

export default App;
