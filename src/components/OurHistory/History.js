import React from "react";
import img from "../../assets/1.jpg";
import {useTranslation} from 'react-i18next'
import "./History.scss";
function History() {
  const {t} = useTranslation()
  return (
    <div className="History" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="intro">
              <h3>{t('ourHistory.intro')}</h3>
              <h5>
              {t('ourHistory.title1')}
              </h5>
              <p>
              {t('ourHistory.subTitle1')}
              </p>
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
