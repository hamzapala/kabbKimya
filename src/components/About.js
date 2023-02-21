import React from "react";
import "./About.css";
import aboutUs from "../img/aboutUs.jpeg";
import vizyon from "../img/vizyon.jpeg";
import kurumsal from "../img/kurumsal.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="aboutContainer">
      <div className="aboutChapter">
        <div className="aboutLeft">
          <img className="aboutLeftImg" src={aboutUs} alt="" />
        </div>
        <div className="aboutRight">
          <h2 className="aboutRightH2">{t("translation:aboutUsCapitalize")}</h2>
          <p className="aboutRightP">{t("translation:aboutUsCapitalizeP1")}</p>
          <p className="aboutRightP">{t("translation:aboutUsCapitalizeP2")}</p>
          <p className="aboutRightP">{t("translation:aboutUsCapitalizeP3")}</p>
        </div>
      </div>
      <div className="aboutChapter">
        <div className="aboutLeft">
          <img className="aboutLeftImg" src={vizyon} alt="" />
        </div>
        <div className="aboutRight">
          <h3 className="aboutRightH3">{t("translation:vision")}</h3>
          <p className="aboutRightP">{t("translation:visionP")}</p>
          <h3 className="aboutRightH3">{t("translation:mission")}</h3>
          <p className="aboutRightP">{t("translation:missionP")}</p>
        </div>
      </div>
      <div className="aboutChapter">
        <div className="aboutLeft">
          <img className="aboutLeftImg" src={kurumsal} alt="" />
        </div>
        <div className="aboutRight">
          <h3 className="aboutRightH3">{t("translation:responsibilty")}</h3>
          <p className="aboutRightP">{t("translation:responsibiltyP")}</p>
          <h3 className="aboutRightH3">{t("translation:qualityPolicy")}</h3>
          <p className="aboutRightP">{t("translation:qualityPolicyP")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
