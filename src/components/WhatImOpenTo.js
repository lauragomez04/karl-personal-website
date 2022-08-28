import React from "react"
import { Tab, Row, Col, Nav, Container } from "react-bootstrap"
import { section4, tabText, arrow } from "../styles/whatimopento.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

export default function WhatImOpenTo() {
  return (
    <section className={section4} id="open-to">
      <Container>
        <h3>WHAT I'M OPEN TO</h3>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="active">
                  <Nav.Link eventKey="first">Research Interests</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    Special Focus and Experience
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Consulting</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Speaking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fifth">Teaching</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth">Advisory</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className={tabText}>
                <Tab.Pane eventKey="first">
                  <ul>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Global value chains, esp. social relations in and
                      economics of
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Political economy of trade relations
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      International trade economics in a development context
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Cooperation, solidarity movements and post-development
                      perspectives
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Quantitative approaches to development studies
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Particular focus on the above in Global South contexts and
                      agricultural applications
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ul>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Coffee
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Latin America
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      International Trade
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Rural Development
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Tropical cash crops
                    </li>
                  </ul>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <ul>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      International Trade
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Rural development
                    </li>
                    <li>
                      <span className={arrow}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                      Tropical
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
