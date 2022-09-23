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

// export async function getStaticProps({ preview = false }) {
//   const posts = await getClient(preview).fetch(`*[_type == "post"]`);
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default Home;

// Connect the sanity io database
// Add article options to Article page
// Get and add a logo
// Add other pages for bottom links
// Finish rest of TM video and Finish small details

// Start writing articles while fixing up website
// Figure out subscribe and what to send people (could do this later)

// const client = createClient({
//   projectId: "wh0nr5m7",
//   dataset: "production",
//   apiVersion: "2022-08-10",
//   useCdn: false,
// });

// import { createClient } from "next-sanity";
