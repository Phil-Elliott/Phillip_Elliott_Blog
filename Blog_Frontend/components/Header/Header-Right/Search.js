import React from "react";
import Link from "next/link";
import styles from "./../../../styles/layout/Header/HeaderRight.module.scss";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <Link href="/search" aria-label="Search">
        <FaSearch className={styles.searchIcon} />
      </Link>
    </>
  );
};

export default Search;

/*
    create a search page to display articles
    1) Make clicking search navigate to search bar on search  page 
    2) Have it highlight the search bar



*/
