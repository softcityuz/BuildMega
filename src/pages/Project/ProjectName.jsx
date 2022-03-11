/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../../assets/Build/foodcity.jpg'
import img2 from '../../assets/projects/poliklinika1.jpg'
import img3 from '../../assets/projects/trastbankSam1.jpg'
import "./project.css";
import { useTranslation } from 'react-i18next';
export const ProjectName = () => {
      const { t } = useTranslation();

  return (
    <div className="PrejectName">
      <h1> {t("ourproject")}</h1>
      <div className="wrapper_project">
        <div class="box">
          <img class="main-img" src={img1} alt="image" />
          <div class="box-content">
            <NavLink to="singularproject1" className="PageameNavlink">
              {" "}
              <div class="item">{t("homeProjects.title1")}</div>
              <div class="description show-animate">{t("homeProjects.subTitle1")}</div>
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img class="main-img" src={img2} alt="Image" />
          <div class="box-content">
            <NavLink to="singularproject3" className="PageameNavlink">
              {" "}
              <div class="item">{t("homeProjects.title3")}</div>
              <div class="description show-animate">
                {t("homeProjects.subTitle3")}
              </div>
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img class="main-img" src={img3} alt="Image" />
          <div class="box-content">
            <NavLink to="singularproject6" className="PageameNavlink">
              {" "}
              <div class="item">{t("homeProjects.title6")}</div>
              <div class="description show-animate">{t("homeProjects.subTitle6")}</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
