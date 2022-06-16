import React from "react"
import { projects, cards, projectBtn } from "../styles/projects.module.css"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

import { projectsData } from "./ProjectsData"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Projects() {
  const data = useStaticQuery(
    graphql`
      query {
        allFile(
          filter: {
            extension: { regex: "/(png)/" }
            relativeDirectory: { eq: "projects" }
          }
        ) {
          edges {
            node {
              base
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <section className={projects}>
      <h3>RESEARCH &amp; PROJECTS</h3>
      <Container className={cards}>
        <Row>
          {projectsData.map((project, index) => {
            return (
              <Col key={index}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    {data.allFile.edges.forEach((image, index) => {
                      return (
                        <div key={index}>
                          <Img
                            fluid={image.node.childImageSharp.fluid}
                            alt={image.node.base.split(".")[0]}
                          />
                        </div>
                      )
                    })}
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
