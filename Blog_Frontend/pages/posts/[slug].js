import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import styles from "./../../styles/Article.module.scss";

const PostComponents = {
  types: {
    image: ({ value }) => {
      return (
        <img
          className={styles["post-image"]}
          alt={value.alt || " "}
          src={urlFor(value)}
        />
      );
    },
  },
};

const Post = ({ post }) => {
  const { title, body, mainImage, publishedAt } = post;

  return (
    <div className={styles["article-container"]}>
      {post && (
        <article>
          <h1>{title}</h1>
          <p>Last Updated: {publishedAt}</p>
          <img className={styles["main-img"]} src={urlFor(mainImage)} alt="" />
          <div className={styles["article-content"]}>
            <PortableText value={body} components={PostComponents} />
          </div>
        </article>
      )}
    </div>
  );
};

const query = groq`*[_type == "post" && slug.current == $slug][0] {
      title,
      "username": author->username,
      "authorImage": author->avatar,
      body,
      mainImage, 
      publishedAt, 
      categories
}`;

export async function getStaticPaths() {
  const paths = await getClient().fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(query, { slug: params.slug });

  return {
    props: {
      post,
    },
  };
}

export default Post;
