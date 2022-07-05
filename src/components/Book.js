import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { bookBtn, bookParagraph } from "../styles/mycontent.module.css"
import { StaticImage } from "gatsby-plugin-image"

export default function Book() {
  return (
    <div className="Book">
      <Container>
        <Row>
          <Col sm={6}>
            <StaticImage
              src="../images/book.jpg"
              alt="Cheap Coffee Book cover"
            />
          </Col>
          <Col sm={6}>
            <h4>Cheap Coffee: Behind the Curtain of the Global Coffee Trade</h4>
            <p className={bookParagraph}>
              The green coffee value chain is broken. This book provides a broad
              explanation of the economics, mechanics, and power structures that
              define the industry today. Change, restructuring, and
              conscientious participation from all stakeholders are needed if
              coffee farming is to be a viable livelihood for the next
              generation and part of the solution to the climate crisis that is
              upon us.
            </p>
            <a
              href="https://shop.roastmagazine.com/collections/cheap-coffee/products/cheap-coffee-behind-the-curtain-of-the-global-coffee-trade"
              target="_blank"
              rel="noreferrer"
              className={bookBtn}
            >
              Order Book
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
