import Featured from "../components/Home/Featured/Featured";
import { Latest } from "../components/Home/Latest/Latest";
import Popular from "../components/Home/Popular/Popular";
import { Meta } from "../components/Meta";
import Image from "next/image";
import styles from "./../styles/Home/Home.module.scss";
import { createClient } from "next-sanity";
import groq from "groq";

const client = createClient({
  projectId: "wh0nr5m7",
  dataset: "production",
  apiVersion: "2022-08-10",
  useCdn: false,
});

export default function Home({ posts }) {
  console.log(posts);

  return (
    <div className={styles["home-container"]}>
      <Meta title="Home" />
      <Featured />
      <Latest />
      <Popular />
    </div>
  );
}

export async function getStaticProps({ preview = false }) {
  const posts = await client.fetch(`*[_type == "post"]`);
  return {
    props: {
      posts,
    },
  };
}

// Connect the sanity io database
// Add article options to Article page
// Get and add a logo
// Add other pages for bottom links
// Finish rest of TM video and Finish small details

// Start writing articles while fixing up website
// Figure out subscribe and what to send people (could do this later)
