import React from "react";
import { Link } from "react-router-dom";
import "./RecentNews.scss";
import img1 from "../../assets/projects/bogcha2.jpg";
import img2 from "../../assets/projects/trastbank1.jpg";
import img3 from "../../assets/projects/poliklinika1.jpg";
function RecentNews() {
  const map = [
    {
      id: 1,
      img: img1,
      title1: "250-sonli bog'chani tamirlash ishlari yakunlandi.",
      date: "2022.04.03",
      title2: `Qurilish ishlari o'z vaqtida yakunlandi va foydalaishga topshirildi.Kompniya tomonidan qoshimcha favvora ham qurib berildi.`,
      link: "news",
    },
    {
      id: 2,
      img: img2,
      title1: '"Food City" da TRASTBANK qurilishi yakunlandi',
      date: "2022.04.03",
      title2: `Yangi qurilayotgan yirik bozor hududida hamkorimiz Trastbankning yangi filiali qurib bitkazildi`,
      link: "news",
    },
    {
      id: 3,
      img: img3,
      title1: "60-sonli oilaviy poliklinika foydalanishga topshirildi.",
      date: "2022.04.03",
      title2: `Oilaviy poliklinika to'liq montaj ishlari bitdi va yangi qismlari quirilish ishlari davom ettirilmoqda`,
      link: "news",
    }
  ];
  const map2 = map.map((a) => (
    <div className="col-md-4" key={a.id}>
      <Link to="news">
        <div className="top">
          <img src={a.img} alt="Image" />
        </div>
        <div className="news_text">
          <h3>{a.title1}</h3>
          <span className="date">{a.date}</span>
          <p>{a.title2}</p>
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="RecentNews">
      <div className="container">
        <div className="intro">
          <h2>So'ngi yangiliklar</h2>
        </div>
        <div className="row">{map2}</div>
      </div>
    </div>
  );
}

export default RecentNews;
