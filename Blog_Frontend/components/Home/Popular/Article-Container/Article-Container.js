import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../../../lib/sanity.server";
import { urlFor } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import styles from "./../../../../styles/Pages/Home/Popular/ArticleContainer.module.scss";
import Moment from "react-moment";

const ArticleContainer = ({
  title,
  description,
  image,
  index,
  noBorder,
  slug,
  author,
  authorImage,
  publishedAt,
  categories,
}) => {
  const imageProps = useNextSanityImage(getClient(), image);
  const authorImageProps = useNextSanityImage(getClient(), authorImage);

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
          {/* <PortableText value={description[0]} /> */}
          <p>{shortDescription}</p>
          <div className={styles["author-container"]}>
            <div className={styles["author-image-container"]}>
              <Image
                {...authorImageProps}
                alt={author}
                className={styles["author-image"]}
                layout="fill"
                // height={100}
                // width={100}
              />
            </div>
            <h3 style={{ color: "rgba(26, 28, 26, 0.9)" }}>
              Phil Elliott | <Moment format="MM/DD/YYYY">{publishedAt}</Moment>
            </h3>
          </div>
        </div>
        <div className={styles["home-popular-article-container-right"]}>
          <Image {...imageProps} alt="Featured Image" layout="fill" />
        </div>
      </div>
    </Link>
  );
};

export default ArticleContainer;
