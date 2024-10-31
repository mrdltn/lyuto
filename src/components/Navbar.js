import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="md"
      fixed="top"
      expanded={expanded}
      className="font-weight-bold"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{ fontSize: "1.5rem", fontWeight: "700" }}
        >
          Люто
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>
              Главная
            </Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>
              О нас
            </Nav.Link>
            <Nav.Link href="#music" onClick={() => setExpanded(false)}>
              Музыка
            </Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>
              Контакты
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
