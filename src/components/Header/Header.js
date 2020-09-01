import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Image from "react-image-webp";

export default function Header() {
  return (
    <>
      <div className="justify-content-center">
        <Navbar className="NavMenu">
          <Navbar.Brand href="/">
            <Image webp={require("../../assets/logo.webp")} />
          </Navbar.Brand>
          <Nav className="mr-auto NavPaginas">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink to="/Laempresa" className="nav-link">
              La Empresa
            </NavLink>
            <NavDropdown title="El Amanecer" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/Elamanecerubicacion" className="dropdown-item">
                  Ubicación
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/Elamanecerlotes" className="dropdown-item">
                  Lotes
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/Elamanecercasas" className="dropdown-item">
                  Casas
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Villa Tiana" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="/Villatianaubicacion" className="dropdown-item">
                  Ubicación
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="/Villatianacasas" className="dropdown-item">
                  Casas
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/Duplex" className="nav-link">
              Duplex
            </NavLink>
            <NavLink to="/Noticias" className="nav-link">
              Noticias
            </NavLink>
            <NavLink to="/Contacto" className="nav-link">
              Contacto
            </NavLink>
          </Nav>
        </Navbar>
      </div>
    </>
  );
}
