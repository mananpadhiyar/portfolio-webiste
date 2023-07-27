import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Manan</h1>
        <ul className="footer__list">
          <li>
            <a href="#home" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/manansinhpadhiyar/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-instagram"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/manan-sinh-padhiyar-27b954219/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-linkedin"></i>
          </a>

          <a
            href="https://github.com/mananpadhiyar"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github"></i>
          </a>
        </div>
        <span className="footer__coded">
          coded with ❤️ by Manan Sinh Padhiyar
        </span>
        <span className="footer__copy">&#169; 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
