import React from "react";
import ArticleLink from "./ArticleLink";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../../lib/sanity.server";
import styles from "./../../../styles/Pages/Article/Popular.module.scss";

const PopularContainer = ({ posts }) => {
  return (
    <div className={styles["popular-articles-container"]}>
      <h2>Popular Posts</h2>
      <div className={styles["popular-articles"]}>
        {posts.map((post, index) => {
          if (index < 7) {
            return <ArticleLink key={post._id} post={post} />;
          }
        })}
      </div>
    </div>
  );
};

export default PopularContainer;
