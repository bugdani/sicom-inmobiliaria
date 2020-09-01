import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image from "react-image-webp";

export default function Noticias() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row style={{ paddingBottom: 80, paddingTop: 80 }}>
          <Col className="mt-4 mb-4">
            <ReactPlayer
              url={
                "https://www.youtube.com/watch?v=9_vwgjt4dtQ&feature=emb_logo"
              }
              controls
            />
          </Col>
          <Col className="mt-4 mb-4">
            <div className="justify-content-center mb-3">
              <Image
                webp={require("../../assets/shot_200828_164401.png")}
                style={{ width: 435 }}
              />
              <p style={{ textAlign: "justify" }}>
                El jueves 4 de julio se realizó en el hotel Howard Johnson de la
                ciudad de San Salvador de Jujuy el evento de prensa de
                presentación oficial de los proyectos de El Amanecer y Villa
                Tiana. Allí, los periodistas de diferentes medios de la
                provincia pudieron conocer ambos proyectos y recibir información
                detallada de las principales caracteristicas de los mismos.
              </p>
              <Image
                webp={require("../../assets/shot_200828_164426.png")}
                style={{ width: 435 }}
              />
              <p style={{ textAlign: "justify" }}>
                El día sábado 6 de julio colocamos el cartel informativo de
                Villa Tiana en el terreno donde se construirá el proyecto. Así,
                toda la comunidad puede conocer no sólo las caracteristicas del
                lanzamiento, sino también el lugar exacto donde se va a
                realizar.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
