// Finds all of the categories of the articles
export const getCategories = (posts) => {
  let categories = [];
  posts.map((post) => {
    if (post.categories) {
      post.categories.map((category) => {
        if (!categories.includes(category.title)) {
          categories.push(category.title);
        }
      });
    }
  });
  return categories;
};

// Sorts the articles by category
export const sortPosts = (categories, posts) => {
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
  return sortedPosts;
};
