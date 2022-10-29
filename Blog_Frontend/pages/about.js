import React from "react";
import { Meta } from "../components/Meta";
import styles from "./../styles/Pages/Info/Info.module.scss";

const About = () => {
  return (
    <div className={styles["info-container"]}>
      <Meta
        title="About"
        description="Take a look at what this blog is about and how it will benefit you."
      />
      <div>
        <h1>About</h1>
        <h2>Content that helps you learn and grow</h2>
        <p>
          Learning how to program often comes with a lot of new, daunting
          concepts. It's tough to keep track of it all and you might find
          yourself forgetting what you've learned along the way. But don't
          worry! A little bit of practice will help embed these concepts in your
          memory so that they'll stick with you for good. This blog can act as a
          valuable resource during your journey towards programming mastery!
        </p>
        <h2>Articles on many topics</h2>
        <p>
          In web development, there are multiple tools that can be used in order
          to create a website or application. I have been studying and using
          both front-end and back-end tools, and I hope that by chronicling my
          learning process here, I can also help you learn along with me.
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
