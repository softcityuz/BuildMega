import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/white_logo.png";
import "./Footer.scss";
import { useSelector } from "react-redux";
import { instance } from "./../../api/api";
function Footer() {
  const { t } = useTranslation();
  const [image, setImage] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("contact/").then((response) => setImage(response.data));
  }, []);
  const map = [
    { id: 4, name: t("navbar4"), to: "news" },
    { id: 5, name: t("navbar5"), to: "contact" },
  ];
  const map2 = map.map((a) => (
    <li key={a.id}>
      <Link to={a.to}>{a.name}</Link>
    </li>
  ));
  const AdressMap = image.map((a) => (
    <div className="contacts" key={a.id}>
      <h6>{t("navbar5")}</h6>
      <p>
        <span>{t("footer.adress")}</span>
      </p>
      <p>
        {t("footer.tell")} <a href={"tel:"+a.phoneNumber}>{a.phoneNumber}</a>
      </p>
      <p>
        {t("footer.email")} <span>{a.email} </span>
      </p>
      <p>
        {t("footer.workTime")}{" "}
        <span>
          {" "}
          {language === "uz" ? (
            <>{a.address}</>
          ) : language === "ru" ? (
            <>{a.addressRu}</>
          ) : (
            <>..</>
          )}
        </span>
      </p>
    </div>
  ));
  return (
    <div className="Footer">
      <div className="wrapper container">
        <div className="left_box">
          <a href="/htt1/swsw">
            <img src={logo} alt="rasm bor edi!" />
          </a>
          <p>{t("footer.motto")}</p>
        </div>
        <div className="right_box">
          <div className="navigation">
            <h6>{t("footer.quickLinks")}</h6>
            <ul>
              <li>
                <a href="/#about">{t("navbar1")}</a>
              </li>
              <li>
                <a href="/#services">{t("navbar2")}</a>
              </li>
              <li>
                <a href="/project">{t("navbar3")}</a>
              </li>
              {map2}
            </ul>
          </div>
          {AdressMap}
        </div>
      </div>
    </div>
  );
}

export default Footer;
