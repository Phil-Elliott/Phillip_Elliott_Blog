import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../../lib/sanity.server";
import Moment from "react-moment";
import styles from "./../../../styles/Pages/Article/Popular.module.scss";

const ArticleLink = ({ post }) => {
  const imageProps = useNextSanityImage(getClient(), post.mainImage);
  console.log(post);
  return (
    <div className={styles["popular-article"]}>
      <div className={styles["image-container"]}>
        <Image {...imageProps} alt={post.title} layout="fill" />
      </div>
      <div className={styles["info-container"]}>
        <Link href={`/posts/${post.slug.current}`}>
          <h3>{post.title}</h3>
        </Link>
        <Moment format="MM/DD/YYYY">{post.publishedAt}</Moment>
      </div>
    </div>
  );
};

export default ArticleLink;
