import React, { useState } from "react";
import styles from "./../../../styles/Header/HamburgerIcon.module.scss";

const HamburgerIcon = ({ setIsOpen, isOpen }) => {
  return (
    <div>
      <button
        name="responsive header toggle"
        type="button"
        className={`${styles["toggle-button"]} ${
          isOpen ? styles["toggle-button-open"] : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={styles.bar1}></span>
        <span className={styles.bar2}></span>
        <span className={styles.bar3}></span>
      </button>
    </div>
  );
};

export default HamburgerIcon;
