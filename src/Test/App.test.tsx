import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../Pages/Home";

test("renders Welcome to my hobby CV!", () => {
  render(<Home />);
  const linkElement = screen.getByText(/Welcome to my hobby CV!/i);
  expect(linkElement).toBeInTheDocument();
});
