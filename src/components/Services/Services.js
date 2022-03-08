import React, { useState, useEffect } from "react";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHive } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { instance } from "./../../api/api";

import {
  // faUserGroup,
  // faRulerCombined,
  faCity,
  // faHouseChimneyWindow,
  // faPencil,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  const { t } = useTranslation();
  const { language } = useSelector((state) => state.langReducer);
  const [image, setImage] = useState([]);
  useEffect(() => {
    instance.get("ourService/").then((response) => setImage(response.data));
  }, []);
  // const map = [
  //   {
  //     id: 1,
  //     icon: faRulerCombined,
  //     title1: t("ourServices.title1"),
  //     title2: t("ourServices.subTitle1"),
  //   },
  //   {
  //     id: 2,
  //     icon: faUserGroup,
  //     title1: t("ourServices.title2"),
  //     title2: t("ourServices.subTitle2"),
  //   },
  //   {
  //     id: 3,
  //     icon: faHive,
  //     title1: t("ourServices.title3"),
  //     title2: t("ourServices.subTitle3"),
  //   },
  // ];
  const map2 = image.map((a) => (
    <div className="col-md-4" key={a.id}>
      <div className="icon">
        {/* <FontAwesomeIcon icon={faCity} /> */}
        <img
          src={"https://javagenius.herokuapp.com" + a.attachment.url}
          alt="bu yerda rasm bor edi!"
        />
      </div>
      <div className="info">
        {language === "uz" ? (
          <h4>{a.name}</h4>
        ) : language === "ru" ? (
          <h4>{a.nameRu}</h4>
        ) : (
          <>..</>
        )}
        <p>
          {language === "uz" ? (
            <>{a.description}</>
          ) : language === "ru" ? (
            <>{a.descriptionRu}</>
          ) : (
            <>..</>
          )}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="Services" id="services">
      <div className="container">
        <div className="intro">
          <h2>{t("ourServices.intro")}</h2>
        </div>
        <div className="row">{map2}</div>
        {/* <div className="row the_second">
          <div className="col-md-4">
            <div className="icon">
              <FontAwesomeIcon icon={faCity}></FontAwesomeIcon>
            </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
              <FontAwesomeIcon icon={faHouseChimneyWindow}></FontAwesomeIcon>
            </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="icon">
              <FontAwesomeIcon icon={faPencil}></FontAwesomeIcon>
            </div>
            <div className="info">
              <h5>PRE_CONSTRACTION SERVICES</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy{" "}
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Services;
