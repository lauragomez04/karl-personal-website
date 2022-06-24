import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
  contactSection,
  contactIcons,
  formName,
  formEmail,
  formMessage,
} from "../styles/contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faCalendar } from "@fortawesome/free-regular-svg-icons"

export default function Contact() {
  return (
    <section className={contactSection} id="contact">
      <Container>
        <h3>SAY HELLO</h3>
        <Row>
          <Col sm={5}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .
            </p>
            <div className={contactIcons}>
              <FontAwesomeIcon icon={faLinkedinIn} />{" "}
              <span>
                <a
                  href="https://www.linkedin.com/in/karlwienhold/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect with me
                </a>
              </span>
              <br />
              <FontAwesomeIcon icon={faCalendar} />{" "}
              <span>
                <a href="/" target="_blank" rel="noreferrer">
                  Book a call
                </a>
              </span>
            </div>
          </Col>
          <Col sm={7}>
            <form>
              <input className={formName} type="text" placeholder="Your Name" />
              <input
                className={formEmail}
                type="text"
                placeholder="Your Email"
              />
              <div className="form-row">
                <textarea
                  className={formMessage}
                  name="message"
                  placeholder="Message"
                />
              </div>
              <button>Send Message</button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
