import React, { useState } from "react";
import { HeaderName, HeaderNav, HeaderRight, HamburgerIcon } from "./index";
import styles from "./../../styles/Header/Header.module.scss";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContentContainer}>
        <div className={styles.headerTopContentContainer}>
          <div className={styles.hamburgerIcon}>
            <HamburgerIcon setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
          <HeaderName />
          <div className={styles.headerFullSizeNav}>
            <HeaderNav />
          </div>
          <HeaderRight />
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
