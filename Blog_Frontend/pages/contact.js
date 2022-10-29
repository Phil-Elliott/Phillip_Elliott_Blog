import React from "react";
import { Meta } from "../components/Meta";
import styles from "./../styles/Pages/Info/Info.module.scss";

const Contact = () => {
  return (
    <div className={styles["info-container"]}>
      <Meta
        title="Contact"
        description="Feel free to use this contact information to reach out to me."
      />
      <div>
        <h1>Contact</h1>
        <h2>Reaching Out</h2>
        <p>
          Thank you for reading my blog. If you have any comments or suggestions
          on how I can improve, please contact me at{" "}
          <a href="#"> blahblahbla@gmail.com</a>. Your feedback is greatly
          appreciated!
        </p>
        <h2>Advertising</h2>
        <p>
          If you think that your business or product would be a good fit for my
          website, shoot me an email at <a href="#"> blahblahbla@gmail.com</a>.
          In the subject line, just write "Advertising" so that I can easily
          find it later. Give me a brief overview of what you're offering and
          why you think it would add value for my readers. I'm always on the
          lookout for new companies to partner with!
        </p>
        <h2>Coming Soon</h2>
        <p>
          This blog is only going to get better from here! I have a lot of
          exciting plans for it, like sending weekly newsletters to subscribers
          and bringing my content to social media platforms. That way, I can
          reach more people with the valuable information they're looking for.
          Thank you for being part of this journey with me!
        </p>
      </div>
    </div>
  );
};

export default Contact;

/*

  Contact Us
     small paragraph that leaves email says we are open to sugestions and feedback or whatever 
  
  Talk about keeping in touch and social media eventually 

  



  contact form 
    name 
    email 
    message
    im not a robot thing
    submit button



*/
