import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { Container, Row, Col, Button } from "react-bootstrap"

import {
  whatImHereFor,
  experienceBtn,
  check,
} from "../styles/whatimherefor.module.css"

export default function WhatImHereFor() {
  return (
    <section className={whatImHereFor}>
      <Container>
        <Row className="d-flex align-items-start">
          <Col sm={6}>
            <h3>
              WHAT I'M <br /> HERE FOR
            </h3>
          </Col>
          <Col sm={6}>
            <ul>
              <li>
                <span className={check}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                <span className={check}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                <span className={check}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                <span className={check}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                <span className={check}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <Button className={experienceBtn}>
                My Experience{" "}
                <span className="ps-1">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </span>
              </Button>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
