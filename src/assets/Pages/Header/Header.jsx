import React from "react";
import Logo from "../../../images/logo.jpg";
import "./Header.css";
import Button from "../../Components/Button/Button";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="header-middle-wrapper">
            <a href="/index.html">
              <img className="header-logo" src={Logo} alt="logo of web" />
            </a>

            <a className="header-links" href="">
              Xizmatlar
            </a>
            <a className="header-links" href="">
              Tashkilot haqida
            </a>
            <a className="header-links" href="">
              Rahbariyat
            </a>
            <a className="header-links" href="">
              Faoliyat
            </a>
            <a className="header-links" href="">
              Yangiliklar
            </a>
          </div>

          <div className="header-right-wrapper">
            <Button />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
