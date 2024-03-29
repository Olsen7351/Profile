import React from "react";
import { Route, Routes } from "react-router-dom";
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
    <div className="App">
      <NavBar
        brandName="Jens Olsen's Profile"
        imageSrcPath={logo}
        navItems={navItems}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutMePage />} />
        <Route path="/CV" element={<CVPage />} />
        <Route path="/Grades" element={<GradesPage />} />
      </Routes>
    </div>
  );
}

export default App;
