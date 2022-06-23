import React from "react"
import { Tab, Row, Col, Nav, Container } from "react-bootstrap"
import { section4, tabText, arrow } from "../styles/whatimopento.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function WhatImOpenTo() {
  return (
    <section className={section4}>
      <Container>
        <h3>WHAT I'M OPEN TO</h3>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="active">
                  <Nav.Link eventKey="first">Research</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Consulting</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Speaking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Teaching</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Advisory</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={7}>
              <Tab.Content className={tabText}>
                <Tab.Pane eventKey="first">
                  <ul>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ul>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <ul>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <ul>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="fifth">
                  <ul>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do.
                    </li>
                  </ul>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  )
}
