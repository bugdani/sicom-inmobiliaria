import React from "react";
import { Container, Card, Row, Col, Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image from "react-image-webp";

export default function Contacto() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Image
          webp={require("../../assets/shot_200828_174411.png")}
          style={{ width: 1080, paddingTop: 30 }}
        />
        <Row style={{ paddingBottom: 80, paddingTop: 80 }}>
          <Col className="mb-4">
            <div
              className="justify-content-center mb-3"
              style={{ paddingLeft: 100 }}
            >
              <p
                style={{
                  textAlign: "justify",
                  color: "#54307A",
                  fontWeight: 600,
                }}
              >
                Sicom Soluciones Inmobiliarias
              </p>
              <p style={{ textAlign: "justify" }}>Necochea 474</p>
              <p style={{ textAlign: "justify" }}>sicomsi@gruposicom.com.ar</p>
              <p style={{ textAlign: "justify" }}>Tel: 0388-4223789/4236311</p>
              <p style={{ textAlign: "justify" }}>Horario de Atención:</p>
              <p style={{ textAlign: "justify" }}>
                Lunes a Viernes de 8.30 a 13hs | 16.30 a 21hs
              </p>
              <p style={{ textAlign: "justify" }}>Sábados 9.00 a 13hs</p>
            </div>
          </Col>
          <Col className="mt-4 mb-4">
            <div className="justify-content-center mb-3">
              <div className="google-map-code">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4328.314215671774!2d-65.30718719649394!3d-24.18351705037333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f41e5712991%3A0x1744980aea448bbd!2sSicom%20Soluciones%20Inmobiliarias!5e0!3m2!1ses-419!2sar!4v1598645273796!5m2!1ses-419!2sar"
                  style={{
                    width: 600,
                    height: 450,
                    frameborder: 0,
                    border: 0,
                    allowfullscreen: "",
                  }}
                ></iframe>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
