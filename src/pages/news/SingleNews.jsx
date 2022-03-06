import React from "react";
import style from "./HeaderNews/HeaderNews.module.css";
import {useTranslation} from 'react-i18next'
import img2 from "../../assets/news.jpg";

const SingleNews = (props) => {
  const {t} = useTranslation();
  return (
    <div className={style.WrappererNews}>
      <div
        className={style.HeaderNews2}
        style={{ backgroundImage: `url(${img2})` }}
      >
        <h1 data-aos="fade-up" data-aos-duration="1000">
          {t("homeNews.intro")}
        </h1>
      </div>
      <div
        className={style.SingleKatalog}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className={style.discription} style={{ width: "100%" }}>
          <h1
            className={style.TitleName}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {t("innerNews.title1")}
          </h1>
          <h1 className={style.description4}>
          {t("innerNews.subTitle1")}
            
          </h1>
        </div>
      </div>
    </div>
  );
};
export default SingleNews;
