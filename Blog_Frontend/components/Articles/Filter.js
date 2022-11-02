import React, { useState, useEffect } from "react";
import styles from "./../../styles/Pages/Articles/Articles.module.scss";
import { FaChevronDown } from "react-icons/fa";

const Filter = ({ categories, changeCategory, display, searchPosts }) => {
  const [showContent, setShowContent] = useState(false);
  const [selected, setSelected] = useState("All");

  useEffect(() => {
    setShowContent(true);
  }, []);

  const changeCategoryHandler = (category) => {
    changeCategory(category);
    setShowContent(!showContent);
    setSelected(category);
  };

  const changeCategoryMobile = (category) => {
    changeCategory(category);
  };

  return (
    <div className={styles["main-articles-filter-container"]}>
      <div className={styles["filter-container-categories"]}>
        <select
          className={styles["filter-container-categories-select"]}
          onChange={(e) => changeCategoryMobile(e.target.value)}
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
        <div className={styles.wrapper}>
          <div
            className={styles["select-btn"]}
            onClick={() => setShowContent(!showContent)}
          >
            <span>{selected}</span>
            <FaChevronDown className={styles.downIcon} />
          </div>
          <div
            style={{ display: showContent ? "none" : "block" }}
            className={styles.content}
          >
            <ul>
              <li onClick={() => changeCategoryHandler("All")}>All</li>
              {categories.map((category) => {
                return (
                  <li
                    key={category}
                    value={category}
                    onClick={() => changeCategoryHandler(category)}
                  >
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <p className={styles["filter-container-article-count"]}>{display}</p>
    </div>
  );
};

export default Filter;

// Need to have it scroll up
// Need to drill back and have it in main page so it changes on click outside
