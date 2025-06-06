import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Salaries from "./pages/Salaries";
import DMs from "./pages/DMs";
import Onboarding from "./pages/Onboarding";
import ReactGA from "react-ga4";
import AnalyticsTracker from "./services/AnalyticsTracker";
import Interviews from "./pages/Interviews";
import News from "./pages//News";

function App() {
  ReactGA.initialize("G-4B3EP79PND");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <AnalyticsTracker />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/interviews" element={<Interviews />} />
        <Route path="/news" element={<News />} />
        <Route path="/dms" element={<DMs />} />
        <Route path="/salaries" element={<Salaries />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
