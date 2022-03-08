import "./TopHeader.scss";
import "./TopHeaderSellect.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import i18n from "../../i18n";
import { useDispatch, useSelector } from "react-redux";
import { instance } from "./../../api/api";
function TopHeader() {
  const [image, setImage] = useState([]);
  const [socialNetworkUrl, setsocialNetworkUrl] = useState([]);
  const { language } = useSelector((state) => state.langReducer);
  useEffect(() => {
    instance.get("contact/").then((response) => setImage(response.data));
    instance
      .get("socialNetworkUrl/")
      .then((response) => setsocialNetworkUrl(response.data));
  }, []);
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
  const map2 = socialNetworkUrl.map((a, index) => (
    <li key={a.id} className="insta">
      <a href={a.url}>
        {a.id === 1 ? (
          <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
        ) : a.id === 2 ? (
          <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>
        ) : a.id === 3 ? (
          <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
        ) : a.id === 4 ? (
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        ) : (
          <>..</>
        )}
      </a>
    </li>
  ));
  const mapAdress = image.map((a) => (
    <div className="left_box" key={a.id}>
      <div className="adress">
        <p>
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          {language === "uz" ? (
            <>{a.address}</>
          ) : language === "ru" ? (
            <>{a.addressRu}</>
          ) : (
            <>..</>
          )}
        </p>
      </div>
      <div className="call_me">
        <a href={"tel:" + a.phoneNumber}>
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phones :
          {a.phoneNumber}
        </a>
      </div>
    </div>
  ));
  return (
    <div className="TopHeader">
      <div className="container">
        <div className="wrapper">
          {mapAdress}
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