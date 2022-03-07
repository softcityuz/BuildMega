import React from "react";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHive } from "@fortawesome/free-brands-svg-icons";
import {useTranslation} from 'react-i18next'
import {
  faUserGroup,
  faRulerCombined,
  faCity,
  faHouseChimneyWindow,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const {t} = useTranslation()
  const map = [
    {
      id: 1,
      icon: faRulerCombined,
      title1: t("ourServices.title1"),
      title2: t("ourServices.subTitle1"),
    },
    {
      id: 2,
      icon: faUserGroup,
      title1: t("ourServices.title2"),
      title2: t("ourServices.subTitle2"),
    },
    {
      id: 3,
      icon: faHive,
      title1: t("ourServices.title3"),
      title2: t("ourServices.subTitle3"),
    },
    {
      id: 4,
      icon: faCity,
      title1: t("ourServices.title4"),
      title2: t("ourServices.subTitle4"),
    },
    {
      id: 5,
      icon: faHouseChimneyWindow,
      title1: t("ourServices.title5"),
      title2: t("ourServices.subTitle5"),
    },
    {
      id: 6,
      icon: faPencil,
      title1: t("ourServices.title6"),
      title2: t("ourServices.subTitle6"),
    },
  ];
  const map2 = map.map((a) => (
    <div className="col-md-4">
      <div className="icon">
        <FontAwesomeIcon icon={a.icon} />
      </div>
      <div className="info">
        <h5>{a.title1}</h5>
        <p>{a.title2}</p>
      </div>
    </div>
  ));
  return (

    <div className="Services" id="services">
      <div className="container">
        <div className="intro">
          <h2>{t("ourServices.intro")}</h2>
        </div>
        <div className="row">{map2}
        </div>
      </div>
    </div>
  );
}

export default Services;
