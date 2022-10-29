import { useEffect, useState } from "react";
import ArticleContainer from "../components/Home/Popular/Article-Container/Article-Container";
import { Filter, PageIndex } from "../components/Articles";
import { getCategories, sortPosts } from "../components/Articles/functions";
import { Meta } from "../components/Meta";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import styles from "./../styles/Pages/Articles/Articles.module.scss";

const ArticlesContainer = (posts) => {
  const [categories, setCategories] = useState([]);
  const [sortedPosts, setSortedPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts.posts);
  const [count, setCount] = useState(posts.posts.length);
  const [pageCount, setPageCount] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  // const [search, setSearch] = useState("");
  // const [searchedPosts, setSearchedPosts] = useState([]);

  // stores the search input
  // const searchPosts = (search) => {
  //   setSearch(search.target.value);
  // };

  // search through filtered posts
  // useEffect(() => {
  //   const filtered = filteredPosts.filter((post) => {
  //     return post.title.toLowerCase().includes(search.toLowerCase());
  //   });

  //   setSearchedPosts(filtered);
  //   setPageNumber(1);
  // }, [search]);

  // stores the posts to be displayed
  // const displayPosts = search.length ? searchedPosts : filteredPosts;

  // get all categories
  useEffect(() => {
    setCategories(getCategories(posts.posts));
  }, []);

  // sort posts
  useEffect(() => {
    setSortedPosts(sortPosts(categories, posts));
  }, [categories]);

  // Changes the post when an option is select
  const changeCategory = (e) => {
    {
      if (e === "All") {
        setFilteredPosts(posts.posts);
      } else {
        let filteredPosts = [];
        sortedPosts.map((sortedPost) => {
          if (sortedPost.category === e) {
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
      <Meta
        title="Articles"
        description="I have many articles on a variety of topics. See if there are any that you are interested in learning about."
      />
      <h1 className={styles["main-articles-container-header"]}>Articles</h1>
      <Filter
        categories={categories}
        changeCategory={changeCategory}
        display={display}
        // searchPosts={searchPosts}
      />
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

      {/* {pageCount > 1 && (
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
      )} */}
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

could put a search bar in here for now 
- will have to search through the current filtered posts 
- will have to make a new function to search through the posts

  might need to use other selector on mobile

*/
