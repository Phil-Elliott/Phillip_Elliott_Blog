import React from "react";
import Link from "next/link";
import styles from "./../../../styles/layout/Header/HeaderNav.module.scss";

const NavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const HeaderNav = () => {
  return (
    <nav className={styles["header-nav-container"]}>
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
  );
};

export default HeaderNav;
