import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./Footer.scss";
import Image from "react-image-webp";

export default function Footer() {
  return (
    <footer id="sticky-footer" className="py-4 text-white">
      <div className="container text-center">
        <p>
          Informáte en Necochea 474 de Lunes a Viernes de 8.30 a 13hs. y de
          16.30 a 21hs. Los Sábados te esperamos de 9 a 13hs.
          <a href="https://www.facebook.com/sicom.inmobiliaria" target="_blank">
            <Image
              webp={require("../../assets/LogoFacebook.webp")}
              style={{ marginLeft: 20 }}
              href="/"
            />
          </a>
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <div className="p-2 bd-highlight">
            <Image webp={require("../../assets/LogoGrupoSicom.webp")} />
          </div>
          <div className="p-2 bd-highlight">
            <Image webp={require("../../assets/LogoSicomCreditos.webp")} />
          </div>
          <div className="p-2 bd-highlight">
            <Image webp={require("../../assets/LogoEmer.webp")} />
          </div>
          <div className="p-2 bd-highlight">
            <Image webp={require("../../assets/LogoGenial.webp")} />
          </div>
          <div className="p-2 bd-highlight">
            <Image webp={require("../../assets/LogoSicomPagos.webp")} />
          </div>
        </div>
        <p>Grupo Sicom. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
