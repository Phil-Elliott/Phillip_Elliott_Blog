import React, { useState, useRef, useEffect } from "react";
import { HeaderName, HeaderNav, HeaderRight, HamburgerIcon } from "./index";
import styles from "./../../styles/Header/Header.module.scss";

const Header = ({ changeModalDisplay }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mainNavClass, setMainNavClass] = useState(`${styles.headerContainer}`);

  // console.log(changeModalDisplay);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll", () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setMainNavClass(`${styles.headerContainer} ${styles.hiddenHeader}`);
      } else {
        setMainNavClass(`${styles.headerContainer}`);
      }
      lastScrollY = currentScrollY;
    });
  });

  return (
    <header className={mainNavClass}>
      <div className={styles.headerContentContainer}>
        <div className={styles.headerTopContentContainer}>
          <div className={styles.hamburgerIcon}>
            <HamburgerIcon setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
          <HeaderName />
          <div className={styles.headerFullSizeNav}>
            <HeaderNav />
          </div>
          <HeaderRight changeModalDisplay={changeModalDisplay} />
        </div>
      </div>
      <div
        className={`${styles.headerBottomContentContainer} ${
          isOpen
            ? styles.headerBottomContentContainerOpen
            : styles.headerBottomContentContainerClosed
        }`}
      >
        <div className={styles.headerResponsiveLinksContainer}>
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

// Will need to fix responsive header - gets messed up with fixed header
// Probably used a negative margin for space reasons
