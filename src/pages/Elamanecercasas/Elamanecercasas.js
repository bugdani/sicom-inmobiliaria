import React from "react";
import { Container, Card, Row, Col, Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image from "react-image-webp";
import Slider from "infinite-react-carousel";

export default function Elamanecercasas() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col className="mt-1 mb-4">
            <div className="justify-content-center mb-1 mt-5 Link">
              <Image webp={require("../../assets/ElAmanecerCasas1.png")} />
            </div>
            <div className="justify-content-center mb-4 mt-4">
              <Image webp={require("../../assets/ElAmanecerCasas2.png")} />
            </div>
            <div className="justify-content-center mb-4 mt-4">
              <Image webp={require("../../assets/ElAmanacerAvances.png")} />
            </div>
            <div className="justify-content-center mb-4 mt-4">
              <Carousel>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanecerAvance1.webp")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances2.png")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances3.png")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances4.png")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances5.png")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances6.png")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances7.png")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances8.png")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances9.png")}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <Image
                    webp={require("../../assets/ElAmanacerAvances10.png")}
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
