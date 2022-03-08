import React from "react";
import { NavLink } from "react-router-dom";
import moduleName from "./HeaderImg.module.css";
import { useTranslation } from "react-i18next";
export const Breadcrumb = ({ pageNameForTitle, pageName }) => {
  const { t } = useTranslation();

  return (
    <>
      <h1
        data-aos="fade-up"
        data-aos-duration="700"
        className={moduleName.title}
      >
        {pageNameForTitle}
      </h1>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className={moduleName.breadcrumb}
      >
        <NavLink to={"/"}> {t("homapage_r")} / </NavLink>
        <h3> {pageName}</h3>
      </div>
    </>
  );
};
