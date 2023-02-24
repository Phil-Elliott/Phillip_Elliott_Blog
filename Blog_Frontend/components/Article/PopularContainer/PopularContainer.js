import React, { useRef, useEffect } from "react";
import ArticleLink from "./ArticleLink";
import styles from "./../../../styles/Pages/Article/Popular.module.scss";

const PopularContainer = ({ posts, currentTitle }) => {
  let recentPosts =
    currentTitle && posts.filter((post) => post.title !== currentTitle);
  return (
    <div className={styles["popular-container"]}>
      <div className={styles["popular-articles-container"]}>
        <div className={styles.title}>
          <h2>Recent Posts</h2>
        </div>
        <div className={styles["popular-articles"]}>
          {recentPosts &&
            recentPosts.map((post, index) => {
              if (index < 5) {
                return <ArticleLink key={post._id} post={post} index={index} />;
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default PopularContainer;

/*









 Add a line next to recent posts 
 Maybe make a little smaller 
 no border on bottom of last element



 Make it 6 long 
 Make sure that the current element is not grabbed 


*/
