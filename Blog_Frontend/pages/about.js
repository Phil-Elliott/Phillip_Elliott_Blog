import React from "react";
import { Meta } from "../components/Meta";
import styles from "./../styles/About.module.scss";

const About = () => {
  return (
    <div className={styles["about-container"]}>
      <Meta title="About" />
      <div>
        <h1>About Us</h1>
        <h2>Providing valuable content to help you learn</h2>
        <p>
          One of the most difficult things about learning to program is
          understanding all of the new concepts. It can be difficult to keep
          track of everything, and often times you will find yourself forgetting
          what you have learned. However, with a little bit of practice, and by
          using this blog as a resource, you will be able to better understand
          the concepts.
        </p>
        <h2>Articles on many topic</h2>
        <p>
          In web development, there are multiple tools that can be used in order
          to create a website or application. I have been studying and using
          both front-end and back-end tools for some time now, and I hope that
          by chronicling my learning process here, I can also help you learn
          along with me.
        </p>
        <h2>Articles every week</h2>
        <p>
          If you want to keep up with the latest articles from our website, make
          sure to subscribe! We add new content regularly, so you'll always have
          something new to read. Plus, subscribing is free and easy - all you
          need is an email address. So don't wait - sign up today!
        </p>
      </div>
    </div>
  );
};

export default About;
