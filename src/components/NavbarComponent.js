import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png";
import SelectLanguage from "./SelectLanguage";
import { useTranslation } from "react-i18next";
import { Nav, Navbar } from "react-bootstrap";

const NavbarComponent = () => {
  const { t } = useTranslation();
  const [innerWidth, setInnerWidth] = useState();

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  // MOBILE NAVBAR
  if (innerWidth && innerWidth < 768) {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home" style={{ display: "flex" }}>
          <Link
            style={{
              display: "flex",
              textDecoration: "none",
            }}
            to="/"
          >
            <ul style={{ marginLeft: "0px", paddingLeft: "0px" }}>
              <li>
                <img className="logoImg" src={logo} alt={"img"} />
              </li>
            </ul>
            <h3 className="linkH">KABB KİMYA A.Ş.</h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <SelectLanguage />
            </Nav.Link>
            <Link to="/">
              <Nav.Link href="#home">{t("translation:home")}</Nav.Link>
            </Link>
            <Link to="/product">
              <Nav.Link href="#product">{t("translation:products")}</Nav.Link>
            </Link>
            <Link to="/humanresources">
              <Nav.Link to="#humanresources">
                {t("translation:humanResource")}
              </Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link to="#about">{t("translation:corporate")}</Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link to="#contact">{t("translation:contact")}</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    // WEB NAVBAR
    return (
      <div className="header">
        <div>
          <Link style={{ display: "flex", textDecoration: "none" }} to="/">
            <ul>
              <li>
                <img className="logoImg" src={logo} alt={"img"} />
              </li>
            </ul>
            <h3 className="linkH">KABB KİMYA A.Ş.</h3>
          </Link>
        </div>
        <ul>
          <SelectLanguage />
          <li>
            <Link className="link" to="/">
              {t("translation:home")}
            </Link>
          </li>
          <li>
            <Link className="link" to="/product">
              {t("translation:products")}
            </Link>
          </li>
          <li>
            <Link className="link" to="/humanresources">
              {t("translation:humanResource")}
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              {t("translation:corporate")}
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              {t("translation:contact")}
            </Link>
          </li>
        </ul>
      </div>
    );
  }
};
export default NavbarComponent;
