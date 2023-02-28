import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import img4 from "../img/img4.jpeg";

function IndividualIntervalsExample() {
  return (
    <Carousel className="carousel">
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={img4} alt="Fifth slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
