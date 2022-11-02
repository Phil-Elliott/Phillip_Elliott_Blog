import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SubscribeModal from "../components/SubscribeModal/SubscribeModal";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  const [displayModal, setDisplayModal] = useState(false);

  const changeModalDisplay = () => {
    setDisplayModal(!displayModal);
  };

  return (
    <Layout>
      <SubscribeModal
        changeModalDisplay={changeModalDisplay}
        displayModal={displayModal}
      />
      <Component {...pageProps} changeModalDisplay={changeModalDisplay} />
    </Layout>
  );
}

export default MyApp;

/*
    could add particle effects to images on hover
    
    add a search bar 
      1) add logo to header 
      2) Make it open and responsive '
      3) create a search page to display articles
           - could use some of the same components from articles page



    add a comments section 

*/
