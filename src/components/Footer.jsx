import {
  ArrowDown,
  ArrowUp,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "react-feather";
import styles from "./Footer.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const [openSection, setOpenSection] = useState();
  function switchSectionOpen(sectionName) {
    if (sectionName === openSection) {
      setOpenSection();
    } else {
      setOpenSection(sectionName);
    }
  }

  return (
    <footer className={styles.footer}>
      <div>
        <div
          onClick={() => switchSectionOpen("customer")}
          className={styles.footerTitle}
        >
          <h4>Customer</h4>
          <div className={styles.columnToggle}>
            {openSection === "customer" ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>
        {openSection === "customer" && (
          <ul className={styles.customer}>
            <p>Order Status</p>
            <p>Rewards</p>
            <p>Sustainability</p>
            <p>Returns</p>
          </ul>
        )}
      </div>
      <div>
        <div
          onClick={() => switchSectionOpen("contact")}
          className={styles.footerTitle}
        >
          <h4>Contact</h4>
          <div className={styles.columnToggle}>
            {openSection === "contact" ? <ArrowUp /> : <ArrowDown />}
          </div>
        </div>

        {openSection === "contact" && (
          <ul className={styles.contact}>
            <p>phone: 987 654 321</p>
            <p>Email: example@example.com</p>
            <p>
              <Link to="/FAQ">FAQ</Link>
            </p>
          </ul>
        )}
      </div>
      <div className={styles.socials}>
        <Facebook />
        <Twitter />
        <Instagram />
        <Youtube />
      </div>
      <div className={styles.year}>
        <p>2024</p>
      </div>
    </footer>
  );
}
