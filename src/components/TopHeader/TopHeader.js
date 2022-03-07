import "./TopHeader.scss";
import "./TopHeaderSellect.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import i18n from "../../i18n";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/actions/langActions";

function TopHeader() {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
    console.log(event.target.value);
    dispatch({ type: "LANG_CHANGED", payload: event.target.value });
  };
  const map = [
    { link: "/", id: 1, class: "facebook", icon: faFacebook },
    { link: "/", id: 2, class: "tele", icon: faTelegramPlane },
    { link: "/", id: 3, class: "insta", icon: faInstagram },
    { link: "/", id: 4, class: "youtube", icon: faYoutube },
  ];
  const map2 = map.map((a) => (
    <li key={a.id} className={a.class}>
      <Link to={a.link}>
        <FontAwesomeIcon icon={a.icon}></FontAwesomeIcon>{" "}
      </Link>
    </li>
  ));
  return (
    <div className="TopHeader">
      <div className="container">
        <div className="wrapper">
          <div className="left_box">
            <div className="adress">
              <p>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>{" "}
                Yashnobod, Parkent kochasi 74 uy
              </p>
            </div>
            <div className="call_me">
              <a href="tel: +998 99 969 00 70">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phones : +998
                99 969 00 70
              </a>
            </div>
          </div>
          <div className="right_box">
            <div className="socials">
              <ul>
                <li className="facebook">
                  <div className="select">
                    <select name="lang" value={lang} onChange={handleChange}>
                      <option value="uz">UZ</option>
                      <option value="ru">RU</option>
                    </select>
                  </div>
                </li>
                {map2}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
