import React from "react";
import styles from "./../../../styles/Header/HeaderName.module.scss";

const HeaderName = () => {
  return (
    <div className={styles["header-logo-container"]}>
      <h1>dF</h1>
      <p>devFlex</p>
    </div>
  );
};

export default HeaderName;
