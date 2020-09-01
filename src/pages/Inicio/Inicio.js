import React from "react";
import { Container, Card, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./Inicio.scss";
import Image from "react-image-webp";

export default function Inicio() {
  return (
    <>
      <Container className="d-flex align-items-center flex-column content">
        <div class="p-2">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=GigLQFuxovs"}
            controls
          />
        </div>
        <br />
        <div class="p-2">
          <Card
            body
            style={{
              backgroundColor: "#ea973b",
              fontSize: 30,
              color: "#ffffff",
            }}
          >
            “Todos los desarrollos inmobiliarios de GRUPO SICOM cuentan con
            financiación del BANCO DE LA NACIÓN ARGENTINA”
          </Card>
        </div>
        <div class="p-2">
          <div class="d-flex justify-content-center">
            <Card body>
              <Image webp={require("../../assets/ElAmanecer.webp")} />
            </Card>
            <Card body>
              <ReactPlayer
                url={
                  "https://www.youtube.com/watch?v=jFMEgCTpJhI&feature=emb_logo"
                }
                controls
                width={320}
                height={180}
              />
            </Card>
            <Card body>
              <Image webp={require("../../assets/VillaTiana.webp")} />
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
