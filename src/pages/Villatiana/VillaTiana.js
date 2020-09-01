import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./Villatiana.scss";
import Image from "react-image-webp";

export default function Villatiana() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row style={{ paddingBottom: 80, paddingTop: 80 }}>
          <Col className="mt-4 mb-4">
            <div className="justify-content-center mt-5 mb-3">
              <a href="" className="Link">
                Ubicacion
              </a>
            </div>
            <div className="justify-content-center mb-1">
              <a href="" className="Link">
                Viviendas - Características Constructivas
              </a>
            </div>
          </Col>
          <Col className="mt-4 mb-4">
            <Image webp={require("../../assets/VillaTiana1.webp")} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
