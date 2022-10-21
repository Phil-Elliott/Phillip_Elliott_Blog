import React from "react";
import styles from "./../../styles/Articles.module.scss";

const Filter = ({ categories, changeCategory, display, searchPosts }) => {
  return (
    <div className={styles["main-articles-filter-container"]}>
      <div className={styles["filter-container-categories"]}>
        <select
          className={styles["filter-container-categories-select"]}
          onChange={(e) => changeCategory(e)}
        >
          <option value="All">All</option>
          {categories.map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <p className={styles["filter-container-article-count"]}>{display}</p>
      {/* <div className={styles["filter-search"]}>
        <input
          className={styles["filter-search-input"]}
          type="text"
          placeholder="Search"
          onChange={(e) => searchPosts(e)}
        />
      </div> */}
    </div>
  );
};

export default Filter;

// https://mui.com/material-ui/react-select/
// use mui for the select box
