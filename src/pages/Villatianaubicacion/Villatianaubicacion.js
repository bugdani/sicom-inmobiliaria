import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image from "react-image-webp";

export default function Villatianaubicacion() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col className="mt-4 mb-4">
            <Image webp={require("../../assets/VillaTianaUbicacion.webp")} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
