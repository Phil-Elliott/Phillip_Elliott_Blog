import React from "react";
import styles from "./../../styles/Pages/Search/search.module.scss";
import { FaSearch } from "react-icons/fa";

const Input = ({ search, searchAllPosts, changeSearch }) => {
  return (
    <div className={styles["input-container"]}>
      <input
        className={styles["search-input"]}
        type="text"
        autoFocus
        placeholder="Search"
        onChange={(e) => changeSearch(e)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            searchAllPosts();
          }
        }}
        value={search}
      />
      <FaSearch
        className={styles["search-icon"]}
        onClick={() => searchAllPosts()}
      />
    </div>
  );
};

export default Input;
