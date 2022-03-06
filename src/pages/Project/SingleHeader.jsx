import React from "react";
import style from "../news/HeaderNews/HeaderNews.module.css";
import { NavLink } from "react-router-dom";
import img from "../../assets/slider2.jpg";

export function SingleHeader() {
  return <div>
    {/* <MobileNav1 /> */}
    <div className={style.HeaderNews}>
      <img src={img} alt="rasm bor edi" />
      <div className={style.BlockLink}>
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Loyihalar
        </h1>
        <NavLink
          data-aos="fade-up"
          data-aos-duration="700"
          to="/"
          className={style.Block1}
        >
          Bosh sahifa
        </NavLink>
        <a
          data-aos="fade-up"
          data-aos-duration="700"
          href="*"
          className={style.Block2}
        >
          /  Loyihalar{" "}
        </a>
      </div>
    </div>
  </div>;
}
