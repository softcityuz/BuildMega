import React, { useState, useEffect } from "react";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moduleName from "./Location.module.css";
import { useSelector } from "react-redux";
import { instance } from "./../../../../api/api";
import { useTranslation } from 'react-i18next';
function LocationBlockContact({ picture, title, text, IconClass }) {
  return (
    <div className={moduleName.block}>
      <FontAwesomeIcon
        size={"4x"}
        className={moduleName.block_img + " " + IconClass}
        icon={picture}
      ></FontAwesomeIcon>
      <h1 className={moduleName.block_title}>{title}</h1>
      {text}
    </div>
  );
}
const Location = () => {
  const { t } = useTranslation();
  const [image, setImage] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("contact/").then((response) => setImage(response.data));
  }, []);
  const map = image.map((a) => (
    <>
      {a.address}{" "}
      {language === "uz" ? (
        <>{a.address}</>
      ) : language === "ru" ? (
        <>{a.addressRu}</>
      ) : (
        <>..</>
      )}
    </>
  ));
  const map2 = image.map((a) => <>{a.phoneNumber}</>);
  const map3 = image.map((a) => <>{a.email}</>);
  return (
    <div className={moduleName.body}>
      <LocationBlockContact
        picture={faMapMarkerAlt}
        title={t("menu1ContactAdress")}
        text={map}
        id={moduleName.pin}
      />
      <LocationBlockContact
        picture={faPhoneAlt}
        title={t("menu1ContactTel")}
        text={map2}
        id={moduleName.tel}
      />
      <LocationBlockContact
        picture={faEnvelope}
        title={t("menu2Contact2")}
        text={map3}
        id={moduleName.mail}
      />
    </div>
  );
};
export default Location;
