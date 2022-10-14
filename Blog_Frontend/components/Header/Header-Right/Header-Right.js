import React, { useState, useRef, useEffect } from "react";
import styles from "./../../../styles/Header/HeaderRight.module.scss";

const HeaderRight = ({ changeModalDisplay }) => {
  return (
    <div className={styles["header-right-container"]}>
      <button
        name="subscribe link"
        type="button"
        onClick={() => changeModalDisplay()}
      >
        Subscribe
      </button>
    </div>
  );
};

export default HeaderRight;
