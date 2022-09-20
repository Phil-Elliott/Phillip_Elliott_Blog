import React from "react";
import styles from "./../../../styles/Header/HeaderRight.module.scss";

const HeaderRight = () => {
  return (
    <div className={styles["header-right-container"]}>
      <button name="subscribe link" type="button">
        Subscribe
      </button>
    </div>
  );
};

export default HeaderRight;
