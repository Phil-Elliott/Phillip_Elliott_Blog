import React, { useState } from "react";
import styles from "./../../../styles/layout/Header/HamburgerIcon.module.scss";

const HamburgerIcon = ({ setIsOpen, isOpen }) => {
  return (
    <div>
      <div
        className={`${styles["toggle-button"]} ${
          isOpen ? styles["toggle-button-open"] : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.bar1}></span>
        <span className={styles.bar2}></span>
        <span className={styles.bar3}></span>
      </div>
    </div>
  );
};

export default HamburgerIcon;
