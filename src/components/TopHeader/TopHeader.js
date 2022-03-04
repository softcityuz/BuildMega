import "./TopHeader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTelegramPlane,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <div className="TopHeader">
      <div className="container">
        <div className="wrapper">
          <div className="left_box">
            <div className="adress">
              <p>
                <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>{" "}
                Tashkent , Yunusobod 7885
              </p>
            </div>
            <div className="call_me">
              <a href="tel: +998 90 806 20 04">
                <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phones : +998
                90 806 20 04
              </a>
            </div>
          </div>
          <div className="right_box">
            <div className="socials">
              <ul>
                <li className="facebook">
                  <Link to="/">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>{" "}
                  </Link>
                </li>
                <li className="tele">
                  <Link to="/">
                    <FontAwesomeIcon icon={faTelegramPlane}></FontAwesomeIcon>{" "}
                  </Link>
                </li>
                <li className="insta">
                  <Link to="/">
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>{" "}
                  </Link>
                </li>
                <li className="youtube">
                  <Link to="/">
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
