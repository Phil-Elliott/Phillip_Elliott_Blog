import React from "react";
import styles from "./../../styles/Articles.module.scss";

const Filter = ({ categories, changeCategory, display }) => {
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
    </div>
  );
};

export default Filter;
