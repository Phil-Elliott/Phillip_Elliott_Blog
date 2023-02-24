import React, { useState, useRef, useEffect } from "react";
import styles from "./../../../styles/layout/Header/HeaderRight.module.scss";
import Search from "./Search";

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
      <Search />
    </div>
  );
};

export default HeaderRight;
