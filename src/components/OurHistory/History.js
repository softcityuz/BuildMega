import React from "react";
import img from "../../assets/1.jpg";
import "./History.scss";
function History() {
  return (
    <div className="History" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="intro">
              <h3>BIZNING TARIX</h3>
              <h5>
              "Building Mega Service" O'zbekiston qurilish bozorida yetakchi o'rinni egallaydi. Kompaniyamiz 2014 yilda tashkil etilgan.
              </h5>
              <p>
              Kompaniyaning asosiy yo'nalishi: har qanday murakkablikdagi inshootlarning ofis binolarini rekonstruksiya qilish, binolarni kapital ta'mirlash, ofislarni ta'mirlash, shuningdek, har qanday dizayndagi demontaj va yig'ish.
Kompaniyamiz muhandislik tarmoqlarini o'rnatish, ya'ni 380 kVtgacha bo'lgan elektr montaj ishlari, sanitariya-tesisat ishlari, isitish, ventilyatsiya va konditsionerlarni o'rnatish ishlarini ham bajarishi mumkin.
              </p>
              <button>Ko'proq ko'rish</button>
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
