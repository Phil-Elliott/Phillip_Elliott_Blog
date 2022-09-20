import React from "react";
import Link from "next/link";
import styles from "./../../../../styles/Home/Latest/SliderArticle.module.scss";

const SliderArticle = ({ title, image }) => {
  return (
    <Link href="/article" className={styles.link}>
      <div className={styles["home-latest-article"]}>
        <img src={image} alt="Need to put something good here" />
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default SliderArticle;

/*
  Important 
    - Put in Alt for each image and pass through


*/
