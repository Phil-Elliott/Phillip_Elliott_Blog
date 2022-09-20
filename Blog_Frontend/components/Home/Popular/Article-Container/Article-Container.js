import React from "react";
import Link from "next/link";
import styles from "./../../../../styles/Home/Popular/ArticleContainer.module.scss";

const ArticleContainer = ({ title, description, image, index, noBorder }) => {
  return (
    <Link href="/article" className={styles.link}>
      <div className={styles["home-popular-article-container"]}>
        <div
          style={index % 2 !== 0 ? { order: "1" } : { order: "0" }}
          className={
            noBorder && index === 0
              ? `${styles["home-popular-article-container-left"]} ${styles["no-top-border"]}`
              : `${styles["home-popular-article-container-left"]}`
          }
        >
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
        <div className={styles["home-popular-article-container-right"]}>
          <img
            className={styles["home-featured-image"]}
            src={image}
            alt="Coffee"
          />
        </div>
      </div>
    </Link>
  );
};

export default ArticleContainer;
