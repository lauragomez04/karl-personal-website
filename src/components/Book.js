import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { bookBtn, bookParagraph } from "../styles/mycontent.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Book() {
  return (
    <div className="Book">
      <Container>
        <Row>
          <Col>
            <StaticImage
              src="../images/book.jpg"
              alt="Cheap Coffee Book cover"
            />
          </Col>
          <Col>
            <h4>Cheap Coffee Book</h4>
            <p className={bookParagraph}>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est."
              <br />
              <br />
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est."
            </p>
            <Button className={bookBtn}>Buy Book</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
