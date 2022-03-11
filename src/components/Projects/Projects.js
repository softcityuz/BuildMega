import React from "react";
import { Link } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import "./Projects.scss";
// import { useTranslation } from "i18next";

function Projects() {
  const {t} = useTranslation();
  const map = [
    {
      id: 1,
      title1:t("homeProjects.title1"),
      title2: t("homeProjects.subTitle1"),
      url: "project/singularproject1",
    },
    {
      id: 2,
      title1:t("homeProjects.title2"),
      title2: t("homeProjects.subTitle2"),
      url: "project/singularproject2",
    },
    {
      id: 3,
      title1:t("homeProjects.title3"),
      title2: t("homeProjects.subTitle3"),
      url: "project/singularproject3",
    },
    {
      id: 4,
      title1:t("homeProjects.title4"),
      title2: t("homeProjects.subTitle4"),
      url: "project/singularproject4",
    },
    {
      id: 5,
      title1: t("homeProjects.title5"),
      title2: t("homeProjects.subTitle5"),
      url: "project/singularproject5",
    },
    {
      id: 6,
      title1: t("homeProjects.title6"),
      title2: t("homeProjects.subTitle6"),
      url: "project/singularproject6",
    },
    {
      id: 7,
      title1: t("homeProjects.title7"),
      title2: t("homeProjects.subTitle7"),
      url: "project/singularproject7",
    },
    {
      id: 8,
      title1: t("homeProjects.title8"),
      title2: t("homeProjects.subTitle8"),
      url: "project/singularproject8",
    },
  ];
  const map2 = map.map((a) => (
    <div className="each_part" key={a.id}>
      <Link to="">
        <div className="in_wrapper">
          <div className="main_text">
            <h3>{a.title1}</h3>
          </div>
          <div className="hiidden_text">
            <p>
             {a.title2}
            </p>
            <Link to={a.url}>{t("homeProjects.seeProject")}</Link>
          </div>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="projects" id="projects">
      <div className="wrapper">
      {map2}
      </div>
    </div>
  );
}

export default Projects;
