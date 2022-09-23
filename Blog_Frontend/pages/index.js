import Featured from "../components/Home/Featured/Featured";
import { Latest } from "../components/Home/Latest/Latest";
import Popular from "../components/Home/Popular/Popular";
import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "./../styles/Home/Home.module.scss";
import { getClient } from "../lib/sanity.server";
import groq from "groq";

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
