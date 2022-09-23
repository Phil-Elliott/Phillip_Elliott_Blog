import React from "react";
import Link from "next/link";
import { urlFor } from "../../../../lib/sanity";
import styles from "./../../../../styles/Home/Latest/SliderArticle.module.scss";

const SliderArticle = ({ title, image, slug }) => {
  return (
    <Link
      href="/posts/[slug]"
      as={`/posts/${slug.current}`}
      className={styles.link}
    >
      <div className={styles["home-latest-article"]}>
        <img src={urlFor(image)} alt="Need to put something good here" />
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
