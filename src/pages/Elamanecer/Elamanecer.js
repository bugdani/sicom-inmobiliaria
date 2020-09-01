import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./Elamanacer.scss";
import Image from "react-image-webp";

export default function Elamanecer() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col className="mt-4 mb-4">
            <div class="d-flex justify-content-center">
              <Image webp={require("../../assets/ElAmanacer2.webp")} />
            </div>
            <div className="justify-content-center mt-5 mb-1">
              <a href="" className="Link">
                Ubicacion
              </a>
            </div>
            <div className="justify-content-center mb-1">
              <a href="" className="Link">
                Lotes
              </a>
            </div>
            <div className="justify-content-center mb-1">
              <a href="" className="Link">
                Viviendas
              </a>
            </div>
            <div className="justify-content-center mb-1">
              <a href="" className="Link">
                Infraestructura
              </a>
            </div>
          </Col>
          <Col className="mt-4 mb-4">
            <Image webp={require("../../assets/ElAmanecerCasas.webp")} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
