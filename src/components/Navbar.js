import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../img/logo.png";
import SelectLanguage from "./SelectLanguage";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();

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
};

export default Navbar;
