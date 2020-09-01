import React from "react";
import { Container, Card, Row, Col, Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image from "react-image-webp";
import Slider from "infinite-react-carousel";

export default function Elamanecerubicacion() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col className="mt-1 mb-4">
            <div className="justify-content-center mb-1 mt-5 Link">
              <h3>Ubicación</h3>
            </div>
            <div className="justify-content-center mb-4 mt-4">
              <Image webp={require("../../assets/ElAmanecerUbicacion.webp")} />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
