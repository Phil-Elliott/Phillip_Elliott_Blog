import React, { useState } from "react";
import SliderArticle from "./Slider-Article/Slider-Article";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./../../../styles/Pages/Home/Latest/Latest.module.scss";

const Latest = (posts) => {
  return (
    <section className={styles["home-latest-container"]}>
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
                  description={post.body}
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
