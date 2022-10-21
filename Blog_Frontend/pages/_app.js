import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SubscribeModal from "../components/Subscribe-Modal";
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

// useEffect(() => {
//   setDisplayModal(JSON.parse(localStorage.getItem("subscribed")));
// }, [localStorage.getItem("subscribed")]);

// let local = localStorage.getItem("subscribed");

// useEffect(() => {
//   if (localStorage.getItem("subscribed") === "false") {
//     setDisplayModal(true);
//   } else {
//     setDisplayModal(false);
//   }
//   console.log(displayModal);
// }, [local]);

// useEffect(() => {
//   console.log(displayModal);

//   function checkUserData() {
//     const item = localStorage.getItem("subscribed");
//     console.log(item);
//     if (item) {
//       setDisplayModal(item);
//     }
//   }

//   window.addEventListener("storage", checkUserData);

//   return () => {
//     window.removeEventListener("storage", checkUserData);
//   };
// }, []);
