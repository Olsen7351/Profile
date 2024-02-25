import React from "react";
import { render } from "@testing-library/react";
import Navbar from "../Components/Navbar";
import logo from "../logo.svg";

const navItems = ["About", "CV", "Grades"];

test("renders Navbar", () => {
  render(<Navbar brandName="Test" imageSrcPath={logo} navItems={navItems} />);
});

test("renders Navbar with different brandName", () => {
  render(<Navbar brandName="Test2" imageSrcPath={logo} navItems={navItems} />);
});
