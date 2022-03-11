import React from "react";
import style from "./HeaderNews/HeaderNews.module.css";
import {useTranslation} from 'react-i18next'
import img2 from "../../assets/projects/poliklinika1.jpg";
const SingleNews3 = (props) => {
  const {t} = useTranslation();
  return (
    <div className={style.WrappererNews}>
      <div className={style.SingleNews1Wrapper}></div>

      <div
        className={style.HeaderNews2}
        style={{ backgroundImage: `url(${img2})` }}
      >
        <h1>
          {t("homeNews.intro")}
        </h1>
      </div>
      <div
        className={style.SingleKatalog}
      >
        <div className={style.discription} style={{ width: "100%" }}>
          <h1
            className={style.TitleName}
          >
            {t("innerNews.title3")}
          </h1>
          <h1 className={style.description4}>{t("innerNews.subTitle3")}</h1>
        </div>
      </div>
    </div>
  );
};
export default SingleNews3;
