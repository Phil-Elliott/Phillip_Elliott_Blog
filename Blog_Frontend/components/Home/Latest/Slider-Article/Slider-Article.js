import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../../../lib/sanity.server";
import { urlFor } from "../../../../lib/sanity";
import styles from "./../../../../styles/Pages/Home/Latest/SliderArticle.module.scss";

const SliderArticle = ({ title, image, slug, description }) => {
  const imageProps = useNextSanityImage(getClient(), image);
  // const shortTitle = title.length > 25 ? title.slice(0, 25) + "..." : title;
  const newDescription = description[0].children[0].text;
  const shortDescription =
    newDescription.length > 190
      ? newDescription.slice(0, 190) + "..."
      : newDescription;

  return (
    <Link
      href="/posts/[slug]"
      as={`/posts/${slug.current}`}
      className={styles.link}
    >
      <div className={styles["home-latest-article"]}>
        <div className={styles["home-latest-article-image"]}>
          <Image {...imageProps} alt="fun image for article" layout="fill" />
          <div className={styles["image-content-container"]}>
            <h2 title={title}>{title}</h2>
            <p>{shortDescription}</p>
            <button>Read</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SliderArticle;

/*
  Important 
    - Put in Alt for each image and pass through


*/
