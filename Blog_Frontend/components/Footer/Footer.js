import React from "react";
import Link from "next/link";
import styles from "./../../styles/Footer.module.scss";

const NavLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Disclaimer",
    path: "/disclaimer",
  },
  {
    name: "Privacy Policy",
    path: "/privacy",
  },
  {
    name: "Terms of use",
    path: "/terms",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Footer = () => {
  return (
    <footer className={styles["footer-container"]}>
      <h1>Travel Wisely</h1>
      <nav>
        <ul>
          {NavLinks.map((link) => {
            return (
              <li key={link.name}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <p>Copyright © Travel Wisely. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
