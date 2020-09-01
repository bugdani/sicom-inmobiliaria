import React from "react";
import { Container, Card, Row, Col, Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import Image from "react-image-webp";

export default function Duplex() {
  return (
    <>
      <Container style={{ backgroundColor: "#ffffff" }}>
        <Row>
          <Col className="mt-4 mb-4">
            <Image webp={require("../../assets/shot_200828_155035.png")} />
            <Image webp={require("../../assets/shot_200828_155105.png")} />
            <Image webp={require("../../assets/shot_200828_155132.png")} />
            <div className="justify-content-center mb-4 mt-4">
              <Carousel>
                <Carousel.Item>
                  <Image webp={require("../../assets/duplex1.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/duplex2.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/duplex3.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/duplex4.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/duplex5.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/duplex6.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/duplex7.webp")} />
                </Carousel.Item>
                <Carousel.Item>
                  <Image webp={require("../../assets/duplex8.webp")} />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
