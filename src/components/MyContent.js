import React from "react"
import { myContent, contentTabs } from "../styles/mycontent.module.css"
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap"
import Book from "./Book"
import Youtube from "./Youtube"
import Articles from "./Articles"
import Course from "./Course"

export default function MyContent() {
  return (
    <section className={myContent}>
      <Container>
        <Row>
          <Col>
            <h3>MY CONTENT</h3>
            <div className={contentTabs}>
              <Tabs
                fill
                defaultActiveKey="book"
                id="uncontrolled-tab-example"
                className="mb-3 tabs"
              >
                <Tab eventKey="book" title="Book">
                  <Book />
                </Tab>
                <Tab eventKey="youtube" title="Youtube">
                  <Youtube />
                </Tab>
                <Tab eventKey="articles" title="Articles">
                  <Articles />
                </Tab>
                <Tab eventKey="course" title="Course">
                  <Course />
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
