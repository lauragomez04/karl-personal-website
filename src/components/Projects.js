import React from "react"
import { projects, cards, projectBtn } from "../styles/projects.module.css"
import { Container, Row, Col, Card, Button } from "react-bootstrap"
import { projectsData } from "./ProjectsData"

export default function Projects() {
  return (
    <section className={projects} id="research-projects">
      <h3>RESEARCH &amp; PROJECTS</h3>
      <Container className={cards}>
        <Row>
          {projectsData.map((project, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{project.name}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Button className={projectBtn} variant="primary">
                      Learn More
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </section>
  )
}
