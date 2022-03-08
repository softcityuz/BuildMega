import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Projects.scss";
import { useSelector } from "react-redux";
import { instance } from "./../../api/api";
function Projects() {
  const { t } = useTranslation();
  const [image, setImage] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("project/").then((response) => setImage(response.data));
  }, []);
  // const map = [
  //   {
  //     id: 1,
  //     title1: t("homeProjects.title1"),
  //     title2: t("homeProjects.subTitle1"),
  //     url: "project/singilurproject",
  //   },
  //   {
  //     id: 2,
  //     title1: t("homeProjects.title2"),
  //     title2: t("homeProjects.subTitle2"),
  //     url: "project/singilurproject",
  //   },
  //   {
  //     id: 3,
  //     title1: t("homeProjects.title3"),
  //     title2: t("homeProjects.subTitle3"),
  //     url: "project/singilurproject",
  //   },
  //   {
  //     id: 4,
  //     title1: t("homeProjects.title4"),
  //     title2: t("homeProjects.subTitle4"),
  //     url: "project/singilurproject",
  //   },
  //   {
  //     id: 5,
  //     title1: "250-sonli bog'cha",
  //     title2: `Bog'cha binosi to'liq bitgan holda foydalanishga topshirildi!`,
  //     url: "project/singilurproject",
  //   },
  //   {
  //     id: 6,
  //     title1: "TRASTBANK Samarqand filiali",
  //     title2: `Obyetkt qurilish ishlari sifatli tarzda bank xavfsizlik tomonlarini o'ylagan holda puxta qilib qurilgan !`,
  //     url: "project/singilurproject",
  //   },
  //   {
  //     id: 7,
  //     title1: "ALUTEX",
  //     title2: `ALUTEX firmasidan biz sifatli oynak va eshik romlarini harida qilamiz va binolari sifatli eshik oyna bilan jihozlaymiz !`,
  //     url: "project/singilurproject",
  //   },
  //   {
  //     id: 8,
  //     title1: "HEALTHCARE",
  //     title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
  //             qator futbol oynamimzami`,
  //     url: "project/singilurproject",
  //   },
  // ];
  const map2 = image.slice(0, 8).map((a) => (
    <div className="each_part" key={a.id}>
      <Link to={"project/singilur/" + a.id}>
        <div className="in_wrapper">
          <div className="main_text">
            <h3>
              {language === "uz" ? (
                <>{a.name}</>
              ) : language === "ru" ? (
                <> {a.nameRu}</>
              ) : (
                <>..</>
              )}
            </h3>
          </div>
          <div className="hiidden_text">
            <p>
              {language === "uz" ? (
                <>{a.description}</>
              ) : language === "ru" ? (
                <> {a.descriptionRu}</>
              ) : (
                <>..</>
              )}
            </p>
            <Link to={"project/singilur/" + a.id}>
              {t("homeProjects.seeProject")}
            </Link>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="projects" id="projects">
      <div className="wrapper">{map2}</div>
    </div>
  );
}

export default Projects;
