import React from "react";
import "./Product.css";
import farmaG from "../img/farmaG.jpg";
import teknikG from "../img/teknikG.jpeg";
import hamG from "../img/hamG.jpeg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="productContainer">
        <h2 className="productTitle">{t("translation:farma")}</h2>
        <div className="productImgContainer">
          <img className="productImg" src={farmaG} alt="" />
        </div>
      </div>
      <div className="productContainer">
        <h2 className="productTitle">{t("translation:technical")}</h2>
        <div className="productImgContainer">
          <img className="productImg" src={teknikG} alt="" />
        </div>
      </div>
      <div className="productContainer">
        <h2 className="productTitle">{t("translation:raw")}</h2>
        <div className="productImgContainer">
          <img className="productImg" src={hamG} alt="" />
        </div>
      </div>

      <p className="productP">
        {t("translation:productKnowlage")}
        &nbsp;
        <Link to="/">{t("translation:click")}</Link>
      </p>
    </div>
  );
};

export default Product;
