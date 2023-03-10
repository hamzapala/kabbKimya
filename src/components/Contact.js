import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div id="contact" className="container">
      <h2 className="title">{t("translation:contactUs")}</h2>
      <p>{t("translation:contactUsP")}</p>
      <div className="contactContainer">
        <div className="smallContainer">
          <h3 className="subTitle">Email</h3>
          <a className="mailTo" href="mailto:info@kabb.com.tr">
            info@kabb.com.tr
          </a>
        </div>
        <div className="smallContainer">
          <h3 className="subTitle">{t("translation:telephone")}</h3>
          <a className="telephone" href="tel:+90 282 373 73 71">
            +90 282 373 73 71
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
