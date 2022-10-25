import { Meta } from "../../components/Meta";
import groq from "groq";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import PostComponents from "../../components/Article/PostComponents";
import Content from "../../components/Article/Content";
import { useNextSanityImage } from "next-sanity-image";
import { getClient } from "../../lib/sanity.server";
import Moment from "react-moment";
import styles from "./../../styles/Pages/Article/MainContainer.module.scss";
import PopularContainer from "../../components/Article/PopularContainer/PopularContainer";

const Post = ({ post, posts }) => {
  return (
    <div className={styles["main-article-container"]}>
      <Content post={post} />
      {posts && <PopularContainer posts={posts} currentTitle={post.title} />}
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
  const posts = await getClient(preview).fetch(groq`
        *[_type == "post" ] | order(publishedAt desc) { 
          _id,
          title,
          "username": author->username,
          // "categories": categories[]->{id, title}
          "authorImage": author->image,
          body,
          mainImage, 
          slug, 
          publishedAt,
          // categories
          categories[]->{id, title}
        }
        `);
  return {
    props: {
      post,
      posts,
    },
  };
}

export default Post;

/*
    could create two seperate sections 
    - one for the article
    - one for the suggested links 

    Need to populate diffirent data to each 
    - article will have the article data
          - Could put the static props in this component 
    - suggested links will have the popular articles data
          - Could put the homepage static props in this component







*/
