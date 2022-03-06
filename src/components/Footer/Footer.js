import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/white_logo.png";
import "./Footer.scss";
function Footer() {
  const map = [
    { id: 1, to: "/", name: "Xizmatlar" },
    { id: 2, to: "/", name: "Tariximiz" },
    { id: 3, to: "/", name: "Loyihalar" },
    { id: 4, to: "news", name: "Yangiliklar" },
  ];
  const map2 = map.map((a) => (
    <li key={a.id}>
      <Link to={a.to}>{a.name}</Link>
    </li>
  ));
  return (
    <div className="Footer">
      <div className="wrapper container">
        <div className="left_box">
          <a href="/htt1/swsw">
            <img src={logo} alt="rasm bor edi!" />
          </a>
          <p>
          "Building Mega Service" O'zbekiston qurilish bozorida yetakchi o'rinni egallaydi. Kompaniyamiz 2014 yilda tashkil etilgan.
          </p>
        </div>
        <div className="right_box">
          <div className="navigation">
            <h6>Tezkor havolalar</h6>
            <ul>{map2}</ul>
          </div>
          <div className="contacts">
            <h6>Aloqa</h6>
            <p>
              Adress: <span>Yashnobod, Parkent kochasi 74 uy</span>
            </p>
            <p>
              Phones: <a href="tel: +998 99 969 00 70">+998 99 969 00 70</a>
            </p>
            <p>
              Email: <span>info@gmail.com</span>
            </p>
            <p>
              Ish vaqti: <span>Du-Ju, 9:00 - 18:00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
