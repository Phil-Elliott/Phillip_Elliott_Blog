import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../../../lib/sanity.server";
import { urlFor } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import styles from "./../../../../styles/Home/Popular/ArticleContainer.module.scss";

const ArticleContainer = ({
  title,
  description,
  image,
  index,
  noBorder,
  slug,
}) => {
  const imageProps = useNextSanityImage(getClient(), image);
  return (
    <Link
      href="/posts/[slug]"
      as={`/posts/${slug.current}`}
      className={styles.link}
    >
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
          <PortableText value={description[0]} />
        </div>
        <div className={styles["home-popular-article-container-right"]}>
          <Image {...imageProps} alt="Featured Image" layout="fill" />
          {/* <img
            className={styles["home-featured-image"]}
            src={urlFor(image)}
            alt="Coffee"
          /> */}
        </div>
      </div>
    </Link>
  );
};

export default ArticleContainer;
