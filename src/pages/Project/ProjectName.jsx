/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../../assets/projects/trastbank1.jpg'
import img2 from '../../assets/projects/poliklinika1.jpg'
import img3 from '../../assets/projects/trastbankSam1.jpg'
import "./project.css";
import { useTranslation } from 'react-i18next';
export const ProjectName = () => {
      const { t } = useTranslation();

  return (
    <div className="PrejectName">
      <h1> {t("ourproject")}</h1>
      <div className="wrapper">
        <div class="box">
          <img class="main-img" src={img1} alt="image" />
          <div class="box-content">
            <NavLink to="singilurproject" className="PageameNavlink">
              {" "}
              <div class="item">{t("transbanktitle_r")}</div>
              <div class="description show-animate">{t("transbank_r")}</div>
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img class="main-img" src={img2} alt="Image" />
          <div class="box-content">
            <NavLink to="singilurproject" className="PageameNavlink">
              {" "}
              <div class="item">{t("poliknika_r")}</div>
              <div class="description show-animate">
                {t("poliknikaraqami_r")}
              </div>
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img class="main-img" src={img3} alt="Image" />
          <div class="box-content">
            <NavLink to="singilurproject" className="PageameNavlink">
              {" "}
              <div class="item">{t("transbankfiliali_r")}</div>
              <div class="description show-animate">{t("filialhaqida_r")}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
