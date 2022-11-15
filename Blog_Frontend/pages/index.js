import { Featured, Popular, Latest } from "../components/Home/index";
import { Meta } from "../components/Meta";
import { getClient } from "../lib/sanity.server";
import groq from "groq";
import styles from "./../styles/Pages/Home/Home.module.scss";

const Home = ({ posts }) => {
  return (
    <div className={styles["home-container"]}>
      <Meta title="PEB | Web Developer Content" />
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
      "username": author->name,
      "authorImage": author->image,
      // "categories": categories[]->{id, title}
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
  write articles (2 a week)
  Figure out mail chimp and what it sends out to nex subscribers



*/
