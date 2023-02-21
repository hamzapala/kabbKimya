import React from "react";
import "./HumanResources.css";
import { useTranslation } from "react-i18next";

const HumanResources = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <p>{t("translation:humanResourceP1")}</p>
      <p>{t("translation:humanResourceP2")}</p>
    </div>
  );
};

export default HumanResources;
