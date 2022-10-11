import React from "react";
import styles from "./../../../styles/Header/HeaderName.module.scss";

const HeaderName = () => {
  return (
    <div className={styles["header-logo-container"]}>
      <h1>WDL</h1>
      <p>Web Dev Lifeline</p>
    </div>
  );
};

export default HeaderName;
