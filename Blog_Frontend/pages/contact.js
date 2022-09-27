import React from "react";
import { Meta } from "../components/Meta";
import styles from "./../styles/About.module.scss";

const Contact = () => {
  return (
    <div className={styles["about-container"]}>
      <Meta title="Contact" />
      <div>
        <h1>Contact Us</h1>
        <h2>Reaching Out</h2>
        <p>
          Thanks for taking the time to check out my blog. I hope you're finding
          it useful so far. I'm always looking for ways to improve, so if you
          have any suggestions, please don't hesitate to get in touch. You can
          reach me by email at <a href="#"> blahblahbla@gmail.com</a>.
        </p>
        <h2>Advertising</h2>
        <p>
          If you're interested in advertising on my site, I'd love to hear from
          you. Send me an email at <a href="#"> blahblahbla@gmail.com</a> with
          "Advertising" in the subject line, and tell me a little bit about your
          business or product. I'm always looking for new partnerships that can
          provide value for my users.
        </p>
        <h2>Coming Soon</h2>
        <p>
          The future of this blog is very exciting. I have many plans for it,
          including sending weekly newsletters to my subscribed users and
          bringing my content to social media platforms. This will help me reach
          a wider audience and continue providing interesting and valuable
          content. Thank you for reading and supporting this blog!
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
