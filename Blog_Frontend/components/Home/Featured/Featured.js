import { PortableText } from "@portabletext/react";
import Link from "next/link";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../../lib/sanity.server";
import styles from "./../../../styles/Home/Featured.module.scss";

const Featured = (post) => {
  const imageProps = useNextSanityImage(getClient(), post.post.mainImage);

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
            <PortableText value={post.post.body[0]} />
            <div>
              <button type="button" name="Read Article Button">
                Read Now
              </button>
            </div>
          </div>
          <div className={styles["home-featured-right-container"]}>
            <Image {...imageProps} alt="Featured Image" layout="fill" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default Featured;
