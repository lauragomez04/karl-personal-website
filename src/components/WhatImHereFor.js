import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col, Button } from "react-bootstrap"
import Carousel from "react-bootstrap/Carousel"
import {
  whatImHereFor,
  experienceBtn,
  check,
  textContainer,
} from "../styles/whatimherefor.module.css"

export default function WhatImHereFor() {
  return (
    <section className={whatImHereFor}>
      <Container>
        <Row className="d-flex align-items-start">
          <Col sm={5}>
            <h3>
              WHAT I'M <br /> HERE FOR
            </h3>
          </Col>
          <Col sm={7}>
            <Carousel variant="dark">
              <Carousel.Item>
                <p className={textContainer}>
                  <span className={check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  To solve mysteries: To alter the collective understanding of
                  the problems that society and the planet face in a helpful
                  way.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={textContainer}>
                  <span className={check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  To support efforts toward community-driven development of
                  equitable and socially acceptable alternatives to structures
                  that engender inequity and marginalization.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={textContainer}>
                  <span className={check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  To facilitate rural people’s ability to meet their needs
                  through their life projects in ways that are comfortable and
                  culturally acceptable (buen vivir), especially those in the
                  global south which may face greater impediments.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={textContainer}>
                  <span className={check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  To use economic methods and analysis in a social science
                  context and collaborate with other social scientists to
                  achieve the above.
                </p>
              </Carousel.Item>
              <Carousel.Item>
                <p className={textContainer}>
                  <span className={check}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  To bridge the gap between research and practice based on my
                  practical experience and training and subsequent research
                  focus, conducting practically-relevant and applicable research
                  and contributing to tangible projects based on sound theory
                  and insights.
                </p>
              </Carousel.Item>
            </Carousel>
            <Button className={experienceBtn}>
              My Experience{" "}
              <span className="ps-1">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </span>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
