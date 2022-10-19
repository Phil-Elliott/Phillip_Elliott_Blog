import { useEffect, useState } from "react";
import ArticleContainer from "../components/Home/Popular/Article-Container/Article-Container";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Meta } from "../components/Meta";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import styles from "./../styles/Articles.module.scss";

const ArticlesContainer = (posts) => {
  const [category, setCategory] = useState("All");
  const [filteredPosts, setFilteredPosts] = useState(posts.posts);
  const [count, setCount] = useState(posts.posts.length);
  const [pageCount, setPageCount] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  // Finds all of the categories of the articles
  let categories = [];
  posts.posts.map((post) => {
    if (post.categories) {
      post.categories.map((category) => {
        if (!categories.includes(category.title)) {
          categories.push(category.title);
        }
      });
    }
  });

  // Sorts the articles by category
  let sortedPosts = [];
  categories.map((category) => {
    let categoryPosts = [];
    posts.posts.map((post) => {
      if (post.categories) {
        post.categories.map((postCategory) => {
          if (postCategory.title === category) {
            categoryPosts.push(post);
          }
        });
      }
    });
    sortedPosts.push({ category: category, posts: categoryPosts });
  });

  sortedPosts.push({ category: "All", posts: posts.posts });

  // Changes the post when an option is select
  const changeCategory = (e) => {
    {
      setCategory(e.target.value);
      if (e.target.value === "All") {
        setFilteredPosts(posts.posts);
      } else {
        let filteredPosts = [];
        sortedPosts.map((sortedPost) => {
          if (sortedPost.category === e.target.value) {
            filteredPosts = sortedPost.posts;
          }
        });
        setFilteredPosts(filteredPosts);
      }
    }
  };

  // Count of the articles displayed
  const display = count > 1 ? `${count} Articles` : `${count} Article`;

  useEffect(() => {
    setCount(filteredPosts.length);
    setPageCount(Math.ceil(filteredPosts.length / 5));
    setPageNumber(1);
  }, [filteredPosts]);

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
    <div className={styles["main-articles-container"]}>
      <Meta title="Articles" />
      <h1 className={styles["main-articles-container-header"]}>Articles</h1>
      <div className={styles["main-articles-filter-container"]}>
        <div className={styles["filter-container-categories"]}>
          <select
            className={styles["filter-container-categories-select"]}
            onChange={(e) => changeCategory(e)}
          >
            <option value="All">All</option>
            {categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
        </div>
        <p className={styles["filter-container-article-count"]}>{display}</p>
        {/* <div className={styles["filter-container-options"]}></div> */}
      </div>
      <div className={styles["home-popular-articles-container"]}>
        {filteredPosts.map((post, index) => {
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

      {pageCount > 1 && (
        <div className={styles["articles-numberLine-container"]}>
          {pageNumber > 1 && (
            <FaChevronLeft
              className={styles["numberLine-arrow"]}
              onClick={() => changePage(pageNumber - 1)}
            />
          )}

          <div className={styles["articles-numberLine"]}>
            {Array.from(Array(pageCount).keys()).map((number) => {
              return (
                <div
                  style={number + 1 === pageNumber ? { color: "#d05a49" } : {}}
                  className={styles["articles-numberLine-number"]}
                  onClick={() => changePage(pageNumber + 1)}
                >
                  {number + 1}
                </div>
              );
            })}
          </div>

          {pageNumber < pageCount && (
            <FaChevronRight
              className={styles["numberLine-arrow"]}
              onClick={() => changePage(pageNumber + 1)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
    *[_type == "post" ] | order(publishedAt desc) { 
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

export default ArticlesContainer;

/*  


  

*/
