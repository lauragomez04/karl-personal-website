import React from "react"
import { footerSection } from "../styles/footer.module.css"
import { Container, Row, Col, Nav } from "react-bootstrap"

export default function Footer() {
  return (
    <footer className={footerSection}>
      <Container>
        <hr />
        <Row>
          <Col sm={5}>
            <p>
              &copy; {new Date().getFullYear()} <span>Karl Wienhold</span>
            </p>
            <small>Design &amp; Development by Laura Gómez</small>
          </Col>
          <Col sm={7}>
            <Nav className="justify-content-end">
              <Nav.Link href="#research-projects">
                Research &amp; Projects
              </Nav.Link>
              <Nav.Link href="#content">My Content</Nav.Link>
              <Nav.Link href="#open-to">What I'm Open to</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
