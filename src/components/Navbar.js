import React from "react"
import { Navbar, Container, Nav } from "react-bootstrap"

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="name" href="#home">
          KARL WIENHOLD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#research-projects">
              Research &amp; Projects
            </Nav.Link>
            <Nav.Link className="nav-link" href="#content">
              My Content
            </Nav.Link>
            <Nav.Link className="nav-link" href="#open-to">
              What I'm Open to
            </Nav.Link>
            <Nav.Link className="nav-link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
