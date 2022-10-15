import { Featured, Popular, Latest } from "../components/Home/index";
import { Meta } from "../components/Meta";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import styles from "./../styles/Home/Home.module.scss";

const Home = ({ posts }) => {
  return (
    <div className={styles["home-container"]}>
      <Meta title="Home" />
      <Featured post={posts[0]} />
      <Latest posts={posts} />
      <Popular posts={posts} />
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
      "authorImage": author->avatar,
      body,
      mainImage, 
      slug, 
      publishedAt,
      categories
    }
    `);
  return {
    props: {
      posts,
    },
  };
}

export default Home;

/*
2) Have modal come down from top 


*/
