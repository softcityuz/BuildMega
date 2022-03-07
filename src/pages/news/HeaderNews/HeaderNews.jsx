import React from "react";
import style from "./HeaderNews.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import img from "../picture/video-2.mp4"
// import MobileNav1 from "./../mobilnav/MobileNav1";
const MainNews = (props) => {
        const { t } = useTranslation();

  return (
    <div>
      {/* <MobileNav1 /> */}
      <div className={style.HeaderNews}>
        <video src={img} autoPlay loop></video>

        <div className={style.BlockLink}>
          <h1 data-aos="fade-up" data-aos-duration="1000">
            {t("yangilipage_r")}
          </h1>
          <NavLink
            data-aos="fade-up"
            data-aos-duration="700"
            to="/"
            className={style.Block1}
          >
            {t("homapage_r")}
          </NavLink>
          <a
            data-aos="fade-up"
            data-aos-duration="700"
            href="*"
            className={style.Block2}
          >
            / {t("yangilipage_r")}
          </a>
        </div>
      </div>
    </div>
  );
};
export default MainNews;