/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "../../assets/projects/trastbank1.jpg";
import img2 from "../../assets/projects/poliklinika1.jpg";
import img3 from "../../assets/projects/trastbankSam1.jpg";
import "./project.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { instance } from "./../../api/api";
import { useEffect } from "react";
export const ProjectName = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("project/").then((response) => setImage(response.data));
  }, []);
  const map = image.map((a) => (
    <div class="box">
      <img
        class="main-img"
        src={"https://javagenius.herokuapp.com" + a.attachment.url}
        alt="image"
      />
      <div class="box-content">
        <NavLink to={"singilur/" + a.id} className="PageameNavlink">
          {" "}
          <div class="item">
            {" "}
            {language === "uz" ? (
              <>{a.name.split(" ").splice(0, 10).join(" ")}</>
            ) : language === "ru" ? (
              <> {a.nameRu.split(" ").splice(0, 10).join(" ")}</>
            ) : (
              <>..</>
            )}
          </div>
          <div class="description show-animate">
            {" "}
            {language === "uz" ? (
              <>{a.description.split(" ").splice(0, 10).join(" ")}</>
            ) : language === "ru" ? (
              <> {a.descriptionRu.split(" ").splice(0, 10).join(" ")}</>
            ) : (
              <>..</>
            )}
          </div>
        </NavLink>
      </div>
    </div>
  ));
  return (
    <div className="PrejectName">
      <h1> {t("ourproject")}</h1>
      <div className="wrapper">{map}</div>
    </div>
  );
};
