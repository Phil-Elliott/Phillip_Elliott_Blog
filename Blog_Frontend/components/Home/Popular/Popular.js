import React from "react";
// import "./Popular.scss";
import ArticleContainer from "./Article-Container/Article-Container";
import styles from "./../../../styles/Home/Popular/Popular.module.scss";

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
];

const Popular = (posts) => {
  console.log(posts);
  return (
    <section className={styles["home-popular-container"]}>
      <h1 className={styles["home-section-header"]}>Popular</h1>
      <div className={styles["home-popular-articles-container"]}>
        {posts.posts.map((post, index) => {
          if (index > 3) {
            return (
              <ArticleContainer
                key={index}
                index={index}
                title={post.title}
                description={post.body}
                image={post.mainImage}
                slug={post.slug}
                author={post.username}
                authorImage={post.authorImage}
                publishedAt={post.publishedAt}
              />
            );
          }
        })}
      </div>
    </section>
  );
};

export default Popular;

/*

  1) Have 10 articles displayed in a grid.
       one big on top left 
       one small to right and one below
       two by three articles below


       have it displayed in reverse 
         - do just five for now 

        
*/
