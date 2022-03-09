import React  from "react";
import style from "../HeaderNews/HeaderNews.module.css";
import img from "../../../assets/projects/bogcha1.jpg"
import img2 from "../../../assets/projects/trastbank4.jpg";
import img3 from "../../../assets/projects/poliklinika1.jpg";
import "./MainNewsCopy.css";
import { NavLink,Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
<link
  href="https://fonts.googleapis.com/css?family=Raleway:400,800,300"
  rel="stylesheet"
  type="text/css"
></link>;
 const NewsPage = (props) => {
         const { t } = useTranslation();

          const map23 = [
            { id: 1, photoUrl: img, title_uz: t("homeNews.title1"),title_2:t("homeNews.subTitle1") , link: "singular1" },
            { id: 2, photoUrl: img2,title_uz: t("homeNews.title2"),title_2:t("homeNews.subTitle2") , link: "singular2" },
            { id: 3, photoUrl: img3,title_uz: t("homeNews.title3"),title_2:t("homeNews.subTitle3") , link: "singular3" }
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
              <Link to={a.link}> </Link>
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