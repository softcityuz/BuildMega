import React from "react";
import { NavLink } from "react-router-dom";
import img1 from '../../assets/projects/trastbank1.jpg'
import img2 from '../../assets/projects/poliklinika1.jpg'
import img3 from '../../assets/projects/trastbankSam1.jpg'
import "./project.css";
export const ProjectName = () => {
  return (
    <div className="PrejectName">
      <h1>Bizning Loyihalar</h1>
      <div className="wrapper">
        <div class="box">
          <img
            class="main-img"
            src={img1}
            alt="Image"
          />
          <div class="box-content">
            <NavLink to="singilurproject" className="PageameNavlink">
              {" "}
              <div class="item">TRASTBANK</div>
              <div class="description show-animate">
              Bu obyekt Bektemir tumani FOOD City xududida bank binosi
              </div>
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img
            class="main-img"
            src={img2}
            alt="Image"
          />
          <div class="box-content">
            <NavLink to="singilurproject" className="PageameNavlink">
              {" "}
              <div class="item">Oilaviy Polilinika</div>
              <div class="description show-animate">
              60-sonli oilaviy poliklinika qurilishi o'z nihoyasiga yetib foydalanishga topshirildi!
              </div>
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img
            class="main-img"
            src={img3}
            alt="Image"
          />
          <div class="box-content">
            <NavLink to="singilurproject" className="PageameNavlink">
              {" "}
              <div class="item">TRASTBANK Samarqand filiali</div>
              <div class="description show-animate">
              Obyetkt qurilish ishlari sifatli tarzda bank xavfsizlik tomonlarini o'ylagan holda puxta qilib qurilgan !
              </div>
            </NavLink>
          </div>
        </div>
        
      </div>
    
    </div>
  );
};
