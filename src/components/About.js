import React from "react";
import "./About.css";
import aboutUs from "../img/aboutUs.jpeg";
import vizyon from "../img/vizyon.jpeg";
import kurumsal from "../img/kurumsal.jpeg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div id="about" className="aboutContainer">
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
          <p className="aboutRightP">{t("translation:qualityPolicyP1")}</p>
          <p className="aboutRightP">{t("translation:qualityPolicyP2")}</p>
          <li className="aboutRightP">{t("translation:qualityPolicyP3")}</li>
          <li className="aboutRightP">{t("translation:qualityPolicyP4")}</li>
          <li className="aboutRightP">{t("translation:qualityPolicyP5")}</li>
          <li className="aboutRightP">{t("translation:qualityPolicyP6")}</li>
          <li className="aboutRightP">{t("translation:qualityPolicyP7")}</li>
          <li className="aboutRightP">{t("translation:qualityPolicyP8")}</li>
          <li className="aboutRightP">{t("translation:qualityPolicyP9")}</li>
          <p className="aboutRightP">{t("translation:qualityPolicyP10")}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
