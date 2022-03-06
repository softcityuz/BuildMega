import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from 'react-router-dom'
import "./HomeCarousel.scss";

function HomeCarousel() {
  const map = [
    {
      id: 1,
      clas1: "for_backline1",
      class2: "slider1",
      title: "QURILISHLAR",
      title2: "BIZ QURGAN BINOLARNI LOYIHALAR BO'LIMIDA KO'RING",
    },
    {
      id: 2,
      clas1: "for_backline2",
      class2: "slider2",
      title: "SIFAT VA TEZLIK",
      title2: "BIZ SIZGA SIFATLI XIZMATLAR TAKLIF QILAMIZ",
    },
    {
      id: 3,
      clas1: "for_backline3",
      class2: "slider3",
      title: "SHINAM VA ZAMONAVIY",
      title2: "BIZNING LOYIHALARNI KO'RING VA BAHO BERING",
    },
  ];
  const map2 = map.map((a) => (
    <Carousel.Item key={a.id}>
      <div className={a.clas1}>
        <div className={a.class2}>
          <div className="sometext">
            <h1>{a.title}</h1>
            <h4>{a.title2}</h4>
            <Link className="to_other_page" to="/project">Ko'proq ko'rish</Link>
          </div>
        </div>
      </div>
    </Carousel.Item>
  ));
  return (
    <div className="HomeCarousel">
      <Carousel fade>{map2}</Carousel>
    </div>
  );
}

export default HomeCarousel;
