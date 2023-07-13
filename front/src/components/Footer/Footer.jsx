import React from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

 

const Footer = () => (
  <section className={styles.footer}>
    <div className={styles.logo}>
      <Link to={'/'}>
        <img src='./images/userIcon.svg' alt="Stuff" />
      </Link>
    </div>

    <div className={styles.rights}>
      Developed by{" "}
      <a href="https://youtube.com/Albogachiev" target="_blank" rel="noreferrer">
        Albogachiev
      </a>
    </div>

    <div className={styles.socials}>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
        </svg>
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
        </svg>
      </a>

      <a href="https://youtube.com" target="_blank" rel="noreferrer">
        <svg className="icon">
          <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
        </svg>
      </a>
    </div>
  </section>
);

export default Footer;