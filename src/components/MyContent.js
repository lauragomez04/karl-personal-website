import React from "react"
import { myContent, contentTabs } from "../styles/mycontent.module.css"
import { Container, Row, Col, Tab, Tabs } from "react-bootstrap"
import Book from "./Book"
import Youtube from "./Youtube"
import Articles from "./Articles"
import Course from "./Course"

export default function MyContent() {
  return (
    <section className={myContent} id="content">
      <Container>
        <Row>
          <Col>
            <h3>MY CONTENT</h3>
            <div className={contentTabs}>
              <Tabs
                justify
                defaultActiveKey="book"
                id="uncontrolled-tab-example"
                className="mb-5"
              >
                <Tab tabClassName="activeColor" eventKey="book" title="Book">
                  <Book />
                </Tab>
                <Tab
                  tabClassName="activeColor"
                  eventKey="youtube"
                  title="Youtube"
                >
                  <Youtube />
                </Tab>
                <Tab
                  tabClassName="activeColor"
                  eventKey="articles"
                  title="Articles"
                >
                  <Articles />
                </Tab>
                <Tab
                  tabClassName="activeColor"
                  eventKey="course"
                  title="Course"
                >
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
