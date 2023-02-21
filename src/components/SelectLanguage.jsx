import React, { useEffect, useState } from "react";
import i18n from "../languages/i18n";

const SelectLanguage = (e) => {
  const [language, setLanguage] = useState("");

  useEffect(() => {
    let lang = localStorage.getItem("multilang");
    setLanguage(lang.toUpperCase());
  }, []);
  const changeLanguage = (e) => {
    let lang;
    if (e.target.value === "TR") {
      lang = "tr";
    } else {
      lang = "en";
    }
    i18n.changeLanguage(lang);
    localStorage.setItem("multilang", lang);
    setLanguage(lang.toUpperCase());
  };

  return (
    <select onChange={changeLanguage} name="" id="">
      {localStorage.getItem("multilang") === "tr" ? (
        <option selected value={language}>
          TR
        </option>
      ) : (
        <option value="TR">TR</option>
      )}
      {localStorage.getItem("multilang") === "en" ? (
        <option selected value="EN">
          {language}
        </option>
      ) : (
        <option value="EN">EN</option>
      )}
    </select>
  );
};

export default SelectLanguage;
