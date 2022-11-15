import React, { useState, useEffect } from "react";
import ArticleContainer from "../components/Home/Popular/Article-Container/Article-Container";
import Input from "../components/Search/Input";
import { PageIndex } from "../components/Articles";
import { Meta } from "../components/Meta";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import styles from "./../styles/Pages/Search/search.module.scss";

const search = ({ posts }) => {
  const [search, setSearch] = useState("");
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [count, setCount] = useState(searchedPosts.length);
  const [pageCount, setPageCount] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  // stores the search input
  const changeSearch = (search) => {
    setSearch(search.target.value);
  };

  const searchAllPosts = () => {
    const filtered = posts.filter((post) => {
      return post.title.toLowerCase().includes(search.toLowerCase());
    });

    setSearchedPosts(filtered);
  };

  // Count of the articles displayed
  const display = count > 1 ? `${count} Articles` : `${count} Article`;

  useEffect(() => {
    setCount(searchedPosts.length);
    setPageCount(Math.ceil(searchedPosts.length / 5));
    setPageNumber(1);
  }, [searchedPosts]);

  // goes to top of page when number in numberline is clicked
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Changes the page number
  const changePage = (number) => {
    if (number !== pageNumber) {
      setPageNumber(number);
      goToTop();
    }
  };

  return (
    <div className={styles.main}>
      <Meta
        title="Search | PEB"
        description="Find the content that you are looking for. Search through all of the articles on the site."
      />
      <h1 className={styles["main-articles-container-header"]}>Search</h1>

      <div className={styles["search-container"]}>
        <Input
          changeSearch={changeSearch}
          searchAllPosts={searchAllPosts}
          search={search}
        />
        <p className={styles["filter-container-article-count"]}>{display}</p>
      </div>
      <div className={styles["search-results"]}>
        {searchedPosts.map((post, index) => {
          if (index < pageNumber * 5 && index >= (pageNumber - 1) * 5) {
            return (
              <ArticleContainer
                key={index}
                index={index}
                title={post.title}
                description={post.body}
                image={post.mainImage}
                slug={post.slug}
                noBorder={true}
                author={post.username}
                authorImage={post.authorImage}
                publishedAt={post.publishedAt}
                categories={post.categories}
              />
            );
          }
        })}
      </div>
      <PageIndex
        pageCount={pageCount}
        pageNumber={pageNumber}
        changePage={changePage}
      />
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        "username": author->username,
        // "categories": categories[]->{id, title}
        "authorImage": author->image,
        body,
        mainImage,
        slug,
        publishedAt,
        // categories
        categories[]->{id, title}
      }
      `);
  return {
    props: {
      posts,
    },
  };
}

export default search;
