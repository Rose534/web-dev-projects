import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn contact-details" : "contact-details"} style={{ padding: "40px" }}>
                  <h2 style={{ fontSize: "56px", marginBottom: "20px" }}>Get In Touch</h2>
                  <p style={{ fontSize: "20px", marginBottom: "30px" }}>If you would like to get in touch with me, you can reach out through the following methods:</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    <li style={{ fontSize: "20px", marginBottom: "30px" }}>Email: <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>wambuirose534@gmail.com</a></li>
                    <li style={{ fontSize: "20px", marginBottom: "30px" }}>Phone: <a href="tel:+254708674692" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>+254 708 674 692</a></li>
                    <li style={{ fontSize: "20px" }}>LinkedIn: <a href="https://www.linkedin.com/in/rose-kiragu/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>LinkedIn Profile</a></li>
                  </ul>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
