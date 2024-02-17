import React, { useState } from "react";
import "../CSS/App.css";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
}

function NavBar({ brandName, imageSrcPath, navItems }: NavBarProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Navbar expand="md" bg="black" className="shadow">
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4 text-white">{brandName}</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <Nav.Item key={index}>
                <Nav.Link
                  className={`${
                    selectedIndex === index ? "fw-bold active" : ""
                  } text-white`} // Add the "text-white" class here
                  onClick={() => setSelectedIndex(index)}
                  href={item}>
                  {item}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
