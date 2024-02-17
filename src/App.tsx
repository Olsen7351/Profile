import React from "react";
import logo from "./Images/logo.svg";
import "./CSS/App.css";
import NavBar from "./Components/navbar";

function App() {
  const navItems = ["Home", "About", "CV", "Contact", "Grades"];
  return (
    <div className="App">
      <NavBar
        brandName="Jens Olsen's Profile"
        imageSrcPath={logo}
        navItems={navItems}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
