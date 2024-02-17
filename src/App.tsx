import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./CSS/App.css";
import NavBar from "./Components/navbar";
import HomePage from "./Pages/Home";
import CVPage from "./Pages/CV";
import AboutMePage from "./Pages/About";
import GradesPage from "./Pages/Grades";


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
