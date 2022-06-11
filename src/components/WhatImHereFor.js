import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { whatImHereFor } from "../styles/whatimherefor.module.css"

export default function WhatImHereFor() {
  return (
    <section className={whatImHereFor}>
      <Container>
        <Row className="d-flex align-items-center">
          <Col>WHAT I'M HERE FOR</Col>
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
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
