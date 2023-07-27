import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  /*=============== Toggle Menu ===============*/

  const [toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Manan
        </a>
        <div className={toggle ? "nav__menu show__menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link ">
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i> skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => {
              showMenu(!toggle);
            }}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => {
            showMenu(!toggle);
          }}
        >
          <i class="uil uil-apps "></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
