import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Tab, Row, Col, Nav, Container } from "react-bootstrap"
import { section4, tabText } from "../styles/whatimopento.module.css"

export default function WhatImOpenTo() {
  const data = useStaticQuery(graphql`
    query OpenTo {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "content/opento/" } }
      ) {
        nodes {
          frontmatter {
            Title
            Number
          }
          html
        }
      }
    }
  `)

  return (
    <section className={section4} id="open-to">
      <Container>
        <h3>WHAT I'M OPEN TO</h3>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={4}>
              <Nav variant="pills" className="flex-column">
                {data.allMarkdownRemark.nodes.map(function (info, index) {
                  return (
                    <Nav.Item key={index}>
                      <Nav.Link eventKey={info.frontmatter.Number}>
                        {info.frontmatter.Title}
                      </Nav.Link>
                    </Nav.Item>
                  )
                })}
              </Nav>
            </Col>
            <Col sm={8}>
              <Tab.Content className={tabText}>
                {data.allMarkdownRemark.nodes.map(function (content, index) {
                  return (
                    <Tab.Pane key={index} eventKey={content.frontmatter.Number}>
                      <div dangerouslySetInnerHTML={{ __html: content.html }} />
                    </Tab.Pane>
                  )
                })}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </section>
  )
}
