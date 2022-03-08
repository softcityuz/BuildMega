/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import img from "../../assets/1.jpg";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import "./History.scss";
import { instance } from "./../../api/api";
function History() {
  const { t } = useTranslation();
  const [image, setImage] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("history/").then((response) => setImage(response.data));
  }, []);
  const map = image.map((a) => (
    <React.Fragment key={a.id}>
      {language === "uz" ? (
        <>{a.name}</>
      ) : language === "ru" ? (
        <>{a.nameRu}</>
      ) : (
        <>..</>
      )}
    </React.Fragment>
  ));
  const map2 = image.map((a) => (
    <React.Fragment key={a.id}>
      {language === "uz" ? (
        <>{a.description}</>
      ) : language === "ru" ? (
        <>{a.descriptionRu}</>
      ) : (
        <>..</>
      )}
    </React.Fragment>
  ));
  return (
    <div className="History" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="intro">
              <h3>{t("ourHistory.intro")}</h3>
              <h5>{map}</h5>
              <p>{map2}</p>
              {/* <button>{t("seeMore")}</button> */}
            </div>
          </div>
          <div className="col-md-6">
            <img src={img} alt="Image for Web" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
