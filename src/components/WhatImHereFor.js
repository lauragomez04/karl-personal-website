import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import {
  whatImHereFor,
  experienceBtn,
} from "../styles/whatimherefor.module.css"

export default function WhatImHereFor() {
  return (
    <section className={whatImHereFor}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col>
            <h3>
              WHAT I'M <br /> HERE FOR
            </h3>
          </Col>
          <Col>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
              </li>
              <Button className={experienceBtn}>My Experience</Button>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
