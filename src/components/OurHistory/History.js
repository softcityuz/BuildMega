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
    instance.get("history").then((response) => setImage(response.data));
  }, []);
  console.log(image);
  const map = image.map((a) => (
    <>
      {language === "uz" ? (
        <>{a.name}</>
      ) : language === "ru" ? (
        <>{a.nameRu}</>
      ) : (
        <>..</>
      )}
    </>
  ));
  return (
    <div className="History" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="intro">
              <h3>{t("ourHistory.intro")}</h3>
              <h5>{map}</h5>
              <p>{t("ourHistory.subTitle1")}</p>
              <button>{t("seeMore")}</button>
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
