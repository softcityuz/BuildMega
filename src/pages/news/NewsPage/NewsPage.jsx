import React  from "react";
import style from "../HeaderNews/HeaderNews.module.css";
import img from "../../../assets/1.jpg"
import img2 from "../../../assets/architecture1.jpg";
import "./MainNewsCopy.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
<link
  href="https://fonts.googleapis.com/css?family=Raleway:400,800,300"
  rel="stylesheet"
  type="text/css"
></link>;
 const NewsPage = (props) => {
         const { t } = useTranslation();

          const map23 = [
            { id: 1, photoUrl: img, title_uz: t("poliknika_r"),title_2:t("poliknikaraqami_r") },
            { id: 2, photoUrl: img2,title_uz: t("poliknika_r"),title_2:t("poliknikaraqami_r") },
            { id: 3, photoUrl: img2,title_uz: t("poliknika_r"),title_2:t("poliknikaraqami_r") }
          ];
  const map2 = map23.map((a, index) => (
    <div
      key={index}
      data-aos="fade-up"
      data-aos-duration="700"
      className={style.Kategoriya}
    >
      <div className="content">
        <div className="grid">
          <figure className="effect-bubba">
            <img src={a.photoUrl} alt="bu yerda rasm bor edi!" />
            <figcaption>
              <NavLink to={"/singilur"}> </NavLink>
              <h2> {a.title_uz}</h2>
              <p> {a.title_2}</p>
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
export default NewsPage