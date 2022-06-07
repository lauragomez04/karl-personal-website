import React from "react"
import Layout from "../components/Layout"
import { heroContainer, heroImage, intro } from "../styles/home.module.css"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from "react-bootstrap"

export default function Home() {
  return (
    <Layout>
      <section>
        <Container fluid className={heroContainer}>
          <StaticImage
            className={heroImage}
            src="../images/karl-wienhold.jpg"
            alt="Karl Wienhold"
          />
          <Row className={intro}>
            <Col>
              <h1>KARL WIENHOLD</h1>
              <h2>PhD Economic Development</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
