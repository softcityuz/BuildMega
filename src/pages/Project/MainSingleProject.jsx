import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import img1 from "../../assets/architecture4.jpg";
import img2 from "../../assets/architecture3.jpg";
import img3 from "../../assets/architecture5.jpg";
import img4 from "../../assets/architecture6.jpg";
import style from "./MainSingleProject.module.css";
export const MainSingleProject = () => {
  return (
    <div className={style.lavhalar}>
      <h1>Loyihalarimiz</h1>
      <div className={style.lavhalar1}>
        <SRLWrapper>
          <div>
            <a href={img1}>
              <img src={img1} alt="Loyiha1" />
            </a>
            <a href={img2}>
              <img src={img2} alt="Loyiha2" />
            </a>
            <a href={img3}>
              <img src={img3} alt="Loyiha3" />
            </a>
            <a href={img4}>
              <img src={img4} alt="Loyiha4" />
            </a>
          </div>
        </SRLWrapper>
      </div>
    </div>
  );
};
