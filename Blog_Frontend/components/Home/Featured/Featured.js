import React from "react";
// import { Link } from "react-router-dom";
import Link from "next/link";
import { urlFor } from "../../../lib/sanity";
import styles from "./../../../styles/Home/Featured.module.scss";

const featuredArticle = {
  title: "Start your day with the right cup of coffee",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  image:
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
};

const Featured = (post) => {
  return (
    <section className={styles["home-featured-container"]}>
      <h1
        className={`${styles["home-section-header"]} ${styles["featured-header"]}`}
      >
        Featured
      </h1>
      <Link
        key={post.post.id}
        href="/posts/[slug]"
        as={`/posts/${post.post.slug.current}`}
        className={styles["link"]}
      >
        <div className={styles["home-featured-article-container"]}>
          <div className={styles["home-featured-left-container"]}>
            <h2>{post.post.title}</h2>
            <p>{featuredArticle.description}</p>
            <div>
              <button type="button" name="Read Article Button">
                Read Now
              </button>
            </div>
          </div>
          <img
            className={styles["home-featured-image"]}
            src={urlFor(post.post.mainImage)}
            alt="Coffee"
          />
        </div>
      </Link>
    </section>
  );
};

export default Featured;
