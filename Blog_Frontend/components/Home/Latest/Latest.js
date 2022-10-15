import React, { useState } from "react";
import SliderArticle from "./Slider-Article/Slider-Article";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./../../../styles/Home/Latest/Latest.module.scss";

const Latest = (posts) => {
  return (
    <section className={styles["home-latest-container"]}>
      <h1 className={styles["home-section-header"]}>Latest</h1>
      <div className={styles["home-latest-slider-container"]}>
        <div className={styles["home-latest-slider-articles"]}>
          {posts.posts.map((post, index) => {
            if (index > 0 && index < 4) {
              return (
                <SliderArticle
                  key={index}
                  title={post.title}
                  image={post.mainImage}
                  slug={post.slug}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Latest;

/*

  Make the image containers in viewports and display each one 
  MAybe have a max width for the articles container 
  When you click 
    - 

  could change file structre 
  use two maps
  use npm for slider
*/
// const [currentArticle, setCurrentArticle] = useState(0)

// const slideLeft = () => {
//   if (currentArticle > 0) {
//     setCurrentArticle((prevArticle) => prevArticle - 1)
//   }
// }

// const slideRight = () => {
//   if (currentArticle < 2) {
//     setCurrentArticle((prevArticle) => prevArticle + 1)
//   }
// }
{
  /* <FaChevronLeft
          className={
            currentArticle > 0
              ? "slider-chevron"
              : "slider-chevron slider-chevron-hide"
          }
          onClick={() => slideLeft()}
        /> */
}

// let min = currentArticle * 3
// let max = min + 3
// if (index >= min && index < max) {
// }

{
  /* <FaChevronRight
          className={
            currentArticle < 2
              ? "slider-chevron"
              : "slider-chevron slider-chevron-hide"
          }
          onClick={() => slideRight()}
        /> */
}
