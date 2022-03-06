import React from "react";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import "./RecentNews.scss";
import img1 from "../../assets/projects/bogcha2.jpg";
import img2 from "../../assets/projects/trastbank1.jpg";
import img3 from "../../assets/projects/poliklinika1.jpg";
function RecentNews() {
  const {t} = useTranslation()
  const map = [
    {
      id: 1,
      img: img1,
      title1: t("homeNews.title1"),
      date: "2022.04.03",
      title2: t("homeNews.subTitle1"),
      link: "news",
    },
    {
      id: 2,
      img: img2,
      title1: t("homeNews.title2"),
      date: "2022.04.03",
      title2: t("homeNews.subTitle2"),
      link: "news",
    },
    {
      id: 3,
      img: img3,
      title1: t("homeNews.title3"),
      date: "2022.04.03",
      title2: t("homeNews.subTitle3"),
      link: "news",
    }
  ];
  const map2 = map.map((a) => (
    <div className="col-md-4" key={a.id}>
      <Link to="singilur">
        <div className="top">
          <img src={a.img} alt="Image" />
        </div>
        <div className="news_text">
          <h3>{a.title1}</h3>
          <span className="date">{a.date}</span>
          <p>{a.title2}</p>
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
