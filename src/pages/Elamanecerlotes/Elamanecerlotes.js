import React from "react";
import { Container, Card, Row, Col, Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image from "react-image-webp";
import Slider from "infinite-react-carousel";

export default function Elamanecerlotes() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col className="mt-4 mb-4">
            <div className="d-flex justify-content-center">
              <Image webp={require("../../assets/ElAmanecerTerrenos.png")} />
            </div>
            <div className="justify-content-center mt-5 mb-1">
              <Image webp={require("../../assets/ElAmanecerTerrenos2.webp")} />
            </div>
            <div className="justify-content-center mb-1 mt-5 Link">
              <h3>Avances de la obra "El amanecer"</h3>
            </div>
            <div className="justify-content-center mb-4 mt-4">
              <Carousel>
                <Carousel.Item>
                  <Image webp={require("../../assets/ElAmanecerSlide1.webp")} />
                </Carousel.Item>

                <Carousel.Item>
                  <Image webp={require("../../assets/ElAmanecerSlide2.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/ElAmanecerSlide3.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/ElAmanecerSlide4.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/ElAmanecerSlide5.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/ElAmanecerSlide6.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/ElAmanecerSlide7.webp")} />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
