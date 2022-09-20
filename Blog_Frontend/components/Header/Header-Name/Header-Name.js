import React from "react";
import styles from "./../../../styles/Header/HeaderName.module.scss";

const HeaderName = () => {
  return (
    <div className={styles["header-logo-container"]}>
      <h1>PEB</h1>
      <p>Phillip Elliott Blog</p>
    </div>
  );
};

export default HeaderName;
