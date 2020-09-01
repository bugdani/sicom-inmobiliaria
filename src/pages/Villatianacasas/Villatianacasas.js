import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image from "react-image-webp";

export default function Villatianacasas() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col className="mt-4 mb-4">
            <Image webp={require("../../assets/presentacion-04.webp")} />
            <Image webp={require("../../assets/presentacion-05.webp")} />
            <Image webp={require("../../assets/presentacion-06.webp")} />
            <Image webp={require("../../assets/presentacion2-07.webp")} />
            <Image webp={require("../../assets/presentacion2-09.webp")} />
            <Image webp={require("../../assets/presentacion2-10.webp")} />
            <Image webp={require("../../assets/presentacion2-11.webp")} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
