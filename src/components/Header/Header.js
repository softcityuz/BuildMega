import React from "react";
import logo from "../../assets/logo.png";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <div className="container">
        <div className="smth">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">Biz haqimizda</Link>
              </li>
              <li>
                <Link to="/">Xizmatlar</Link>
              </li>
              <li>
                <Link to="/">Loyihalar</Link>
              </li>
              <li>
                <Link to="/">Blog</Link>
              </li>
              <li>
                <Link to="/">Aloqa</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
