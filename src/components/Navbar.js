import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { navbarBackground, name, navLink } from "../styles/navbar.module.css"

export default function Navigation() {
  return (
    <Navbar className={navbarBackground} expand="lg">
      <Container>
        <Navbar.Brand className={name} href="#home">
          KARL WIENHOLD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className={navLink} href="#research-projects">
              Research &amp; Projects
            </Nav.Link>
            <Nav.Link className={navLink} href="#content">
              My Content
            </Nav.Link>
            <Nav.Link className={navLink} href="#open-to">
              What I'm Open to
            </Nav.Link>
            <Nav.Link className={navLink} href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
