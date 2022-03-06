import React from "react";
import { NavLink } from "react-router-dom";
import "./project.css";
export const ProjectName = () => {
  return (
    <div className="PrejectName">
      <h1>Bizning Loyihalar</h1>
      <div class="box">
        <img
          class="main-img"
          src="https://www.tripzaza.com/ru/destinations/files/2018/08/shutterstock_605105897-e1534228891646.jpg"
          alt=""
        />
        <div class="box-content">
          <NavLink to="singilurproject" className="PageameNavlink">
            {" "}
            <div class="item">Bizning Loyiha</div>
            <div class="description show-animate">
              biz birinchi loyihani tugatdik va 2 loyihani boshladik
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
