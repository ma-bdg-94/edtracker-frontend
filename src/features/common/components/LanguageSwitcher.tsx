import React from "react";
import { useTranslation } from "react-i18next";
import '../styles/language_switcher.css'

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="floating-button-group">
      <button className="button" onClick={() => changeLanguage("en")}>🇬🇧</button>
      <button className="button" onClick={() => changeLanguage("fr")}>🇫🇷</button>
      <button className="button" onClick={() => changeLanguage("ar")}>🇹🇳</button>
    </div>
  );
};

export default LanguageSwitcher;
