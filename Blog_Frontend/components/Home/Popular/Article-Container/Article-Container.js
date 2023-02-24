import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../../../lib/sanity.server";
import { urlFor } from "../../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import styles from "./../../../../styles/Pages/Home/Popular/ArticleContainer.module.scss";
import moment from "moment";

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
  const [newDate, setNewDate] = useState("");

  const imageProps = useNextSanityImage(getClient(), image);
  const authorImageProps = useNextSanityImage(getClient(), authorImage);

  const newDescription = description[0].children[0].text;
  const shortDescription =
    newDescription.length > 190
      ? newDescription.slice(0, 190) + "..."
      : newDescription;

  useEffect(() => {
    setNewDate(moment(publishedAt).format("MM/DD/YYYY"));
  }, [publishedAt]);

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
          <p className={styles["article-description"]}>{shortDescription}</p>
          <div className={styles["author-container"]}>
            <div className={styles["author-image-container"]}>
              <Image
                {...authorImageProps}
                alt="profile image"
                className={styles["author-image"]}
                height={0}
                width={0}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <h2>
              Phil Elliott | <span>{newDate}</span>
            </h2>
          </div>
        </div>
        <div className={styles["home-popular-article-container-right"]}>
          <Image
            {...imageProps}
            alt="Fun image for article"
            height={0}
            width={0}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
    </Link>
  );
};

export default ArticleContainer;
