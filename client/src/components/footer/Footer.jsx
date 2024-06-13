import React from "react";
import style from "./footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.background}></div>
      <img className="footerLogo" src="/assets/img/KD_emblem.png" alt="wolfgang logo" credits="@art_of_asare on Instagram" />
      <div className={style.contactOptions}>
        <h2>Contact</h2>
        <address>
          <p>Zilversparrenstraat 37</p>
          <p>8310 Sint-Kruis (Brugge)</p>
          <p>West-Vlaanderen, België</p>
        </address>
        <p>
          <a href="tel:+32 9 234 72 00">+32 9 234 72 00</a>
        </p>
        <p>
          <a href="mailto:kevin.dworschak@gmail.com">
            kevin.dworschak@gmail.com
          </a>
        </p>
      </div>
      <div className={style.menuOptions}>
        <h2>Menu</h2>
        <div className={style.menuContainer}>
          <Link to="/about">About Me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Knowledge</Link>
          <Link to="/services">Services</Link>
        </div>
      </div>
      <div className={style.socialContainer}>
        <h2>Join Me!</h2>
        <div className={style.socialOptions}>
          <a
            href="https://www.facebook.com/kefmaiste"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={style.socialIcon}
              icon={faFacebook}
              size="3x"
              color="white"
            />
          </a>
          <a
            href="https://www.instagram.com/kd.visuals_official/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={style.socialIcon}
              icon={faInstagram}
              size="3x"
              color="white"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/kevindworschak/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className={style.socialIcon}
              icon={faLinkedin}
              size="3x"
              color="white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
