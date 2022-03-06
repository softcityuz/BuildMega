import React from "react";
import img from "../../assets/slider2.jpg";
import style from "./SingleProject.module.css"
export const SingleProject = () => {
  return (
    <div>
      <img className={style.Block} src={img} alt="bu yyerda rasm bor edi!" />
    </div>
  );
};
