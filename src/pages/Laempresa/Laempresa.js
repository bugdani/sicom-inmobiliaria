import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./Laempresa.scss";
import Image from "react-image-webp";

export default function Laempresa() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col className="mt-4 mb-4">
            <h3 style={{ color: "#54307A" }}>Sicom Soluciones Inmobiliarias</h3>
            <p style={{ textAlign: "justify" }}>
              Sicom Soluciones Inmobiliarias es una unidad de negocios de Grupo
              Sicom dedicada al desarrollo inmobiliario que nació en el año 2011
              como respuesta a la crisis habitacional presente en la región del
              NOA. Desarrollamos soluciones estratégicas de proyectos urbanos
              que responden a las necesidades insatisfechas de vivienda
              específicas de las familias de dicha región. Nos esforzamos día a
              día para lograr innovación, calidad y confianza para transformar
              las necesidades de nuestros clientes en realidades. Tenemos una
              fuerte vocación de servicio y trato personalizado, buscando
              establecer vínculos de confianza con nuestros clientes que
              perduren en el tiempo.
            </p>
            <div class="d-flex justify-content-center">
              <div className="p-2 bd-highlight">
                <Image webp={require("../../assets/LogoPequenio.webp")} />
              </div>
              <div className="p-2 bd-highlight">
                <Image webp={require("../../assets/LogoSicom.webp")} />
              </div>
            </div>
          </Col>
          <Col className="mt-5">
            <Image webp={require("../../assets/Llave.webp")} />
          </Col>
        </Row>
      </Container>
    </>
  );
}
