import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../../lib/sanity.server";
import Moment from "react-moment";
import styles from "./../../../styles/Pages/Article/Popular.module.scss";

const ArticleLink = ({ post, index }) => {
  const imageProps = useNextSanityImage(getClient(), post.mainImage);
  return (
    <Link href={`/posts/${post.slug.current}`}>
      <div
        className={`${styles["popular-article"]} ${
          index === 4 && styles["popular-article-noBorder"]
        }
        `}
      >
        <div className={styles["image-container"]}>
          <Image
            {...imageProps}
            alt={post.title}
            height={0}
            width={0}
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className={styles["info-container"]}>
          <h3>{post.title}</h3>
          {/* <Moment format="MM/DD/YYYY">{post.publishedAt}</Moment> */}
        </div>
      </div>
    </Link>
  );
};

export default ArticleLink;
