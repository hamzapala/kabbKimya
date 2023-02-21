import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div>
        <div className="footer">
          <div>
            <Link style={{ display: "flex", textDecoration: "none" }} to="/">
              <ul>
                <li>
                  <img className="logoImg" src={logo} alt={"img"} />
                </li>
              </ul>
              <h3
                className="link"
                style={{
                  paddingTop: "2.5rem",
                  paddingLeft: "0rem",
                  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                }}
              >
                KABB KİMYA A.Ş.
              </h3>
            </Link>
          </div>
          <div className="footerSelect">
            <ul className="footerUl">
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
          <div>
            <ul className="footerUl">
              <li>Kabb Kim.San.ve.Tic.A.Ş.</li>
              <li>T : 0282 373 73 71</li>
              <li>E : info@kabb.com.tr</li>
              <li>Tekirdağ</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="theLast">©2023, Kabb A.Ş.</p>
    </footer>
  );
};

export default Footer;
