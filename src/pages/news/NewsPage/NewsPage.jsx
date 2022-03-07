import React, { useState, useEffect } from "react";
import style from "../HeaderNews/HeaderNews.module.css";
import "./MainNewsCopy.css";
import img from "../../../assets/architecture3.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { instance } from "./../../../api/api";
<link
  href="https://fonts.googleapis.com/css?family=Raleway:400,800,300"
  rel="stylesheet"
  type="text/css"
></link>;
const NewsPage = (props) => {
  const { t } = useTranslation();
  const [image, setImage] = useState([]);
    const { language } = useSelector((state) => state.langReducer);

  useEffect(() => {
    instance.get("news/").then((response) => setImage(response.data));
  }, []);
  const map2 = image.map((a, index) => (
    <div
      key={index}
      className={style.Kategoriya}
    >
      <div className="content">
        <div className="grid">
          <figure className="effect-bubba">
            <img src={img} alt="bu yerda rasm bor edi!" />
            <figcaption>
              <NavLink to={"singilur/" + a.id}> </NavLink>
              <h2>
                {language === "uz" ? (
                  <>{a.name.split(" ").splice(0, 10).join(" ")}</>
                ) : language === "ru" ? (
                  <> {a.nameRu.split(" ").splice(0, 10).join(" ")}</>
                ) : (
                  <>..</>
                )}
              </h2>
              <p>
                {language === "uz" ? (
                  <>{a.description.split(" ").splice(0, 10).join(" ")}</>
                ) : language === "ru" ? (
                  <> {a.descriptionRu.split(" ").splice(0, 10).join(" ")}</>
                ) : (
                  <>..</>
                )}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <div className={style.Katalog}>
        <div style={{ width: "100%" }}>
          {""}
          <h1> {t("yangilipage_r")}</h1>
        </div>
        {map2}
      </div>
    </div>
  );
};
export default NewsPage;
