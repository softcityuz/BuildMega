import React from "react";
import { Link } from "react-router-dom";

import "./Projects.scss";

function Projects() {
  const map = [
    {
      id: 1,
      title1: "TRASTBANK",
      title2: `Bu obyekt Bektemir tumani FOOD City xududida bank binosi`,
      url: "project",
    },
    {
      id: 2,
      title1: 'ProCab kompaniyasi',
      title2: `ProCab firmsi bilan ancha yillardan beri hamkorlik qilib kelmmoqdamiz`,
      url: "project",
    },
    {
      id: 3,
      title1: "Oilaviy Polilinika",
      title2: `60-sonli oilaviy poliklinika qurilishi o'z nihoyasiga yetib foydalanishga topshirildi!`,
      url: "project",
    },
    {
      id: 4,
      title1: "Toshkent shahar xokimyati",
      title2: `Toshkent shahar xokimyati biz bilan moliyaviy huquqiy masalalarda o'z amaliy yordamini ko'rsatib kelmoqda!`,
      url: "project",
    },
    {
      id: 5,
      title1: "250-sonli bog'cha",
      title2: `Bog'cha binosi to'liq bitgan holda foydalanishga topshirildi!`,
      url: "project",
    },
    {
      id: 6,
      title1: "TRASTBANK Samarqand filiali",
      title2: `Obyetkt qurilish ishlari sifatli tarzda bank xavfsizlik tomonlarini o'ylagan holda puxta qilib qurilgan !`,
      url: "project",
    },
    {
      id: 7,
      title1: "ALUTEX",
      title2: `ALUTEX firmasidan biz sifatli oynak va eshik romlarini harida qilamiz va binolari sifatli eshik oyna bilan jihozlaymiz !`,
      url: "project",
    },
    {
      id: 8,
      title1: "HEALTHCARE",
      title2: `Lorem ipsum dolor sit boshqa qismi esimda yo yana shu textdan 2
              qator futbol oynamimzami`,
      url: "project/singilurproject",
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
            <Link to={a.url}>LOYIHANI KO'RISH</Link>
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
