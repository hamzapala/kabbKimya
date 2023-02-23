import React from "react";
import "./Home.css";
import IndividualIntervalsExample from "./Carousel";
import { Link } from "react-router-dom";
import gliserin from "../img/gliserin.jpeg";
import kozmetik from "../img/kozmetik.jpeg";
import gida from "../img/gida.jpeg";
import temizlik from "../img/temizlik.jpeg";
import yem from "../img/yem.jpeg";
import ilac from "../img/ilac.jpeg";
import teknik from "../img/teknik.jpeg";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <IndividualIntervalsExample />
      <p className="homeP">{t("translation:homeP")}</p>
      <div className="aboutUs">
        <h4>{t("translation:aboutUs")}</h4>
        <p>{t("translation:aboutUsP")}</p>
        <Link className="link" to="/about">
          {t("translation:read")}
        </Link>
      </div>
      <div>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "700",
            margin: "3rem 0 1rem",
          }}
        >
          {t("translation:whatIsGli")}
        </h2>
        <div className="gliseryn">
          <p className="gliserynP">{t("translation:whatIsGliP")}</p>
          <img src={gliserin} alt="" />
        </div>
        <div className="usageArea">
          <h2>{t("translation:usageArea")}</h2>
          <ul>
            <a href="#kozmetik">
              <li>{t("translation:cosmetics")}</li>
            </a>
            <span>|</span>
            <a href="#gida">
              <li>{t("translation:food")}</li>
            </a>
            <span>|</span>
            <a href="#temizlik">
              <li>{t("translation:care")}</li>
            </a>
            <span>|</span>
            <a href="#yem">
              <li>{t("translation:feed")}</li>
            </a>
            <span>|</span>
            <a href="#ilac">
              <li>{t("translation:medicine")}</li>
            </a>
            <span>|</span>
            <a href="#teknik">
              <li>{t("translation:technicalUse")}</li>
            </a>
          </ul>
        </div>
        <div className="chapter">
          <div id="kozmetik" className="left">
            <h5>{t("translation:cosmetics")}</h5>
            <p
              style={{
                fontSize: "small",
              }}
            >
              {t("translation:cosmeticsP")}
            </p>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  textDecoration: "italic",
                  fontFamily: "'Shadows Into Light', cursive",
                }}
              >
                {t("translation:detailed")}
              </p>
              <Link className="link" to="/contact">
                <button className="button">
                  {t("translation:contactUs")}!
                </button>
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={kozmetik} alt="" />
          </div>
        </div>
        <div className="chapter">
          <div id="gida" className="left">
            <h5>{t("translation:food")}</h5>
            <p
              style={{
                fontSize: "small",
              }}
            >
              {t("translation:foodP")}
            </p>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  textDecoration: "italic",
                  fontFamily: "'Shadows Into Light', cursive",
                }}
              >
                {t("translation:detailed")}
              </p>
              <Link className="link" to="/contact">
                <button className="button">
                  {t("translation:contactUs")}!
                </button>
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={gida} alt="" />
          </div>
        </div>
        <div className="chapter">
          <div id="temizlik" className="left">
            <h5>{t("translation:careAndClean")}</h5>
            <p
              style={{
                fontSize: "small",
              }}
            >
              {t("translation:careP")}
            </p>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  textDecoration: "italic",
                  fontFamily: "'Shadows Into Light', cursive",
                }}
              >
                {t("translation:detailed")}
              </p>
              <Link className="link" to="/contact">
                <button className="button">
                  {t("translation:contactUs")}!
                </button>
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={temizlik} alt="" />
          </div>
        </div>
        <div className="chapter">
          <div id="yem" className="left">
            <h5>{t("translation:feed")}</h5>
            <p
              style={{
                fontSize: "small",
              }}
            >
              {t("translation:feedP")}
            </p>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  textDecoration: "italic",
                  fontFamily: "'Shadows Into Light', cursive",
                }}
              >
                {t("translation:detailed")}
              </p>
              <Link className="link" to="/contact">
                <button className="button">
                  {t("translation:contactUs")}!
                </button>
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={yem} alt="" />
          </div>
        </div>
        <div className="chapter">
          <div id="ilac" className="left">
            <h5>{t("translation:medicine")}</h5>
            <p
              style={{
                fontSize: "small",
              }}
            >
              {t("translation:medicineP")}
            </p>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  textDecoration: "italic",
                  fontFamily: "'Shadows Into Light', cursive",
                }}
              >
                {t("translation:detailed")}
              </p>
              <Link className="link" to="/contact">
                <button className="button">
                  {t("translation:contactUs")}!
                </button>
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={ilac} alt="" />
          </div>
        </div>
        <div className="chapter">
          <div id="teknik" className="left">
            <h5>{t("translation:technicalUse")}</h5>
            <p
              style={{
                fontSize: "small",
              }}
            >
              {t("translation:technicalUseP")}
            </p>
            <div style={{ textAlign: "center" }}>
              <p
                style={{
                  textDecoration: "italic",
                  fontFamily: "'Shadows Into Light', cursive",
                }}
              >
                {t("translation:detailed")}
              </p>
              <Link className="link" to="/contact">
                <button className="button">
                  {t("translation:contactUs")}!
                </button>
              </Link>
            </div>
          </div>
          <div className="right">
            <img src={teknik} alt="" />
          </div>
        </div>
        <div className="spesifikasyon">
          <Link className="link" to="/contact">
            <p>{t("translation:pleaseContact")}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
