import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { courseParagraph, courseBtn } from "../styles/mycontent.module.css"

export default function Course() {
  return (
    <div className="Course">
      <Container>
        <Row>
          <Col>
            <p>Hello from Course</p>
          </Col>
          <Col>
            <h4>Actors and Structures of the Green Coffee Supply Chain</h4>
            <p className={courseParagraph}>
              This course should give you an understanding of the structure of
              the coffee supply chain from seed to cup.
              <br />
              <br />
              We will analyze the main actors in the chain and their roles. We
              will also present the processes coffee goes through from the seed
              that is planted, to the cherry harvested, to the green bean
              exported, to the beverage in your cup. Additionally, the
              relationships between supply chain actors and inflection points
              represented by nodes of the chain will be discussed.
            </p>
            <a
              href="https://education.perfectdailygrind.com/courses/introduction-to-the-green-coffee-supply-chain/"
              target="_blank"
              rel="noreferrer"
              className={courseBtn}
            >
              Take Course
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
