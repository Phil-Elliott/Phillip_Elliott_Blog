import React from "react";
// import "./Popular.scss";
import ArticleContainer from "./Article-Container/Article-Container";
import styles from "./../../../styles/Pages/Home/Popular/Popular.module.scss";

const Popular = (posts) => {
  return (
    <section className={styles["home-popular-container"]}>
      <h1 className={styles["home-section-header"]}>Recent Posts</h1>
      <div className={styles["home-popular-articles-container"]}>
        {posts.posts.map((post, index) => {
          if (index > 3 && index < 9) {
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
