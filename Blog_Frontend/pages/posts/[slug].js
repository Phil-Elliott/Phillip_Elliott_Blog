import { Meta } from "../../components/Meta";
import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";
import { getClient } from "../../lib/sanity.server";
import Moment from "react-moment";
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
  return (
    <div className={styles["article-container"]}>
      <Meta title={post.title} />
      {post && (
        <article>
          <h1>{post.title}</h1>
          <h3>
            Phil Elliott |{" "}
            <Moment format="MM/DD/YYYY">{post.publishedAt}</Moment>
          </h3>
          <img
            className={styles["main-img"]}
            src={urlFor(post.mainImage)}
            alt=""
          />
          <div className={styles["article-content"]}>
            <PortableText value={post.body} components={PostComponents} />
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
