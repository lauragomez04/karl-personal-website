import React from "react"
import { footerSection, copyRight } from "../styles/footer.module.css"
import { Container, Row, Col, Nav } from "react-bootstrap"

export default function Footer() {
  return (
    <footer className={footerSection}>
      <Container>
        <hr />
        <Row>
          <Col sm={5}>
            <p className={copyRight}>
              &copy; {new Date().getFullYear()} <span>Karl Wienhold</span>
            </p>
            <small>
              Design &amp; Development by{" "}
              <a href="https://lauragomezcodes.com">Laura Gómez</a>
            </small>
          </Col>
          <Col sm={7}>
            <Nav className="justify-content-md-end justify-content-sm-start">
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
