import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./CSS/App.css";
import NavBar from "./Components/navbar";
import HomePage from "./Pages/Home";
import CVPage from "./Pages/CV";
import AboutMePage from "./Pages/AboutMe";
import GradesPage from "./Pages/grades";

function App() {
  const navItems = ["About Me", "CV", "Grades"];
  return (
    <Router>
      <div className="App">
        <NavBar
          brandName="Jens Olsen's Profile"
          imageSrcPath={logo}
          navItems={navItems}
        />
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/About Me" Component={AboutMePage} />
          <Route path="/CV" Component={CVPage} />
          <Route path="/Grades" Component={GradesPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
