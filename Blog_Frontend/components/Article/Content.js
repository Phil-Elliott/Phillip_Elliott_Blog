import React from "react";
import PostComponents from "./PostComponents";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../lib/sanity.server";
import { Meta } from "../../components/Meta";
import Moment from "react-moment";
import { PortableText } from "@portabletext/react";
import styles from "./../../styles/Pages/Article/Content.module.scss";

export const Content = ({ post }) => {
  const imageProps = post && useNextSanityImage(getClient(), post.mainImage);
  const authorImageProps =
    post && useNextSanityImage(getClient(), post.authorImage);
  // const description = post && post.body[0].children[0].text;
  const description = "description";

  return (
    <div className={styles["article-container"]}>
      {post && <Meta title={post.title} description={description} />}
      {post && (
        <article>
          <h1>{post.title}</h1>
          <div className={styles["article-author-container"]}>
            <div className={styles["article-author-image-container"]}>
              <Image {...authorImageProps} alt="Author Image" />
            </div>
            <h3 style={{ color: "rgba(26, 28, 26, 0.9)" }}>
              Phil Elliott |{" "}
              <Moment format="MM/DD/YYYY">{post.publishedAt}</Moment>
            </h3>
          </div>
          <div className={styles["main-img"]}>
            <Image
              {...imageProps}
              alt="Main Article Image"
              height={0}
              width={0}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <div className={styles["article-content"]}>
            <PortableText value={post.body} components={PostComponents} />
          </div>
        </article>
      )}
    </div>
  );
};

export default Content;
