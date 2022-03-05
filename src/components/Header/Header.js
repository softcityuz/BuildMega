import React from "react";
import logo from "../../assets/white_logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();

  return (
    <div className="Header">
      <div className="container">
        <div className="smth">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">{t("navbar1")}</Link>
              </li>
              <li>
                <Link to="/">{t("navbar2")}</Link>
              </li>
              <li>
                <Link to="/">{t("navbar3")}</Link>
              </li>
              <li>
                <Link to="/">{t("navbar4")}</Link>
              </li>
              <li>
                <Link to="/">{t("navbar5")}</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
