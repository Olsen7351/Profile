import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./CSS/App.css";
import NavBar from "./Components/navbar";
import HomePage from "./Home";
import CVPage from "./CV";
import AboutMePage from "./About";
import GradesPage from "./Grades";




function App() {
  const navItems = ["About", "CV", "Grades"];
  return (
    <Router>
      <div className="App">
        <NavBar
          brandName="Jens Olsen's Profile"
          imageSrcPath={logo}
          navItems={navItems}
        />
        <Routes>
          <Route path="/Profile" Component={HomePage} />
          <Route path="/Profile/About" Component={AboutMePage} />
          <Route path="/Profile/CV" Component={CVPage} />
          <Route path="/Profile/Grades" Component={GradesPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
