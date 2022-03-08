/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./RecentNews.scss";
import img1 from "../../assets/projects/bogcha2.jpg";
// import img2 from "../../assets/projects/trastbank1.jpg";
// import img3 from "../../assets/projects/poliklinika1.jpg";
import { useSelector } from "react-redux";
import { instance } from "./../../api/api";
function RecentNews() {
  const { t } = useTranslation();
  const [image, setImage] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("news/").then((response) => setImage(response.data));
  }, []);
  const map2 = image.slice(0,4).map((a) => (
    <div className="col-md-4" key={a.id}>
      <Link to={"news/singilur/" + a.id}>
        <div className="top">
          <img src={img1} alt="Image" />
        </div>
        <div className="news_text">
          <h3>
            {language === "uz" ? (
              <>{a.name}</>
            ) : language === "ru" ? (
              <> {a.nameRu}</>
            ) : (
              <>..</>
            )}
          </h3>
          <span className="date">{a.date}</span>
          <p>
            {language === "uz" ? (
              <>{a.description}</>
            ) : language === "ru" ? (
              <> {a.descriptionRu}</>
            ) : (
              <>..</>
            )}
          </p>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="RecentNews">
      <div className="container">
        <div className="intro">
          <h2>{t("homeNews.intro")}</h2>
        </div>
        <div className="row">{map2}</div>
      </div>
    </div>
  );
}

export default RecentNews;
