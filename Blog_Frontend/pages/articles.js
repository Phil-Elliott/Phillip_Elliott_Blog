import React from "react";
import ArticleContainer from "../components/Home/Popular/Article-Container/Article-Container";
import { Meta } from "../components/Meta";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import styles from "./../styles/Articles.module.scss";

const featuredArticles = [
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2016/11/21/12/10/tv-1844964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2016/04/30/08/35/aircraft-1362586_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2013/08/11/19/46/coffee-171653_960_720.jpg",
  },
  {
    title: "Start your day with the right cup of coffee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image:
      "https://cdn.pixabay.com/photo/2020/01/22/18/23/istanbul-4785964_960_720.jpg",
  },
];

const ArticlesContainer = (posts) => {
  return (
    <div className={styles["main-articles-container"]}>
      <Meta title="Articles" />
      <h1 className={styles["main-articles-container-header"]}>Articles</h1>
      <div className={styles["main-articles-filter-container"]}>
        <div className={styles["filter-container-categories"]}>
          <select className={styles["filter-container-categories-select"]}>
            <option value="all">All</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
            <option value="category3">Category 3</option>
          </select>
        </div>
        <p className={styles["filter-container-article-count"]}>10 Articles</p>
        {/* <div className={styles["filter-container-options"]}></div> */}
      </div>
      <div className={styles["home-popular-articles-container"]}>
        {posts.posts.map((post, index) => {
          return (
            <ArticleContainer
              key={index}
              index={index}
              title={post.title}
              description={post.body}
              image={post.mainImage}
              slug={post.slug}
              noBorder={true}
              author={post.username}
              authorImage={post.authorImage}
              publishedAt={post.publishedAt}
              categories={post.categories}
            />
          );
        })}
      </div>
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
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
      posts,
    },
  };
}

export default ArticlesContainer;

/*  

 1) categories
 2) article count
 3) filter options

*/
