import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/img4.jpeg";
import { useTranslation } from "react-i18next";

function IndividualIntervalsExample() {
  const { t } = useTranslation();
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption
          style={{ backgroundColor: "rgba(119, 197, 199, 0.36)" }}
        >
          <h3>{t("translation:building")}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption
          style={{ backgroundColor: "rgba(119, 197, 199, 0.36)" }}
        >
          <h3>{t("translation:farma")}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption
          style={{ backgroundColor: "rgba(119, 197, 199, 0.36)" }}
        >
          <h3>{t("translation:raw")}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
        <img className="d-block w-100" src={img4} alt="Fifth slide" />
        <Carousel.Caption
          style={{ backgroundColor: "rgba(119, 197, 199, 0.36)" }}
        >
          <h3>{t("translation:technical")}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
