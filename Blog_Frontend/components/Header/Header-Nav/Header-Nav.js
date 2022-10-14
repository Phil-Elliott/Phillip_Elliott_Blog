import React from "react";
import Link from "next/link";
import styles from "./../../../styles/Header/HeaderNav.module.scss";

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
            <Link href={link.path}>
              <li key={link.name}>{link.name}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default HeaderNav;
