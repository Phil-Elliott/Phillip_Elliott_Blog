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
