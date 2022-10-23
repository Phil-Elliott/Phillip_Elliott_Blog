import { Meta } from "../../components/Meta";
import groq from "groq";
import { PortableText } from "@portabletext/react";
import { urlFor } from "../../lib/sanity";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../lib/sanity.server";
import Moment from "react-moment";
import styles from "./../../styles/Pages/Article/Article.module.scss";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

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
    code: ({ value }) => {
      return (
        <div className={styles["code-image-container"]}>
          <SyntaxHighlighter
            className={styles["code-image"]}
            wrapLines={true}
            wrapLongLines={true}
            language={value.language}
            style={atomOneDark}
            // showInlineLineNumbers={true}
            // showLineNumbers
            lineProps={{
              style: {
                // wordBreak: "break-all",
                // whiteSpace: "pre-wrap",
              },
            }}
            // codeTagProps={{ style: { fontSize: "inherit" } }}
            // customStyle={{ fontSize: 18 }}
            lineNumberStyle={{
              padding: "0 5px 0 0",
              // fontSize: 14,
              borderRight: "1.5px solid darkgray",
              marginRight: "10px",
            }}
          >
            {value.code}
          </SyntaxHighlighter>
        </div>
      );
    },
  },
};

const Post = ({ post }) => {
  // console.log(post);
  const imageProps = post && useNextSanityImage(getClient(), post.mainImage);
  const authorImageProps =
    post && useNextSanityImage(getClient(), post.authorImage);
  return (
    <div className={styles["article-container"]}>
      {post && <Meta title={post.title} />}
      {post && (
        <article>
          <h1>{post.title}</h1>
          <div className={styles["article-author-container"]}>
            <div className={styles["article-author-image-container"]}>
              <Image {...authorImageProps} alt="Featured Image" />
            </div>
            <h3 style={{ color: "rgba(26, 28, 26, 0.9)" }}>
              Phil Elliott |{" "}
              <Moment format="MM/DD/YYYY">{post.publishedAt}</Moment>
            </h3>
          </div>
          <div className={styles["main-img"]}>
            <Image {...imageProps} alt="Featured Image" layout="fill" />
          </div>
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
      "username": author->name,
      "authorImage": author->image,
      
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
