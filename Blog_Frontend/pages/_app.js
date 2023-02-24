import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SubscribeModal from "../components/SubscribeModal/SubscribeModal";
import Script from "next/script";
import "../styles/globals.scss";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [displayModal, setDisplayModal] = useState(false);
  const router = useRouter();

  const changeModalDisplay = () => {
    setDisplayModal(!displayModal);
  };

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-HCF2X7344D"
      ></Script>

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HCF2X7344D', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />

      <Layout>
        <SubscribeModal
          changeModalDisplay={changeModalDisplay}
          displayModal={displayModal}
        />
        <Component {...pageProps} changeModalDisplay={changeModalDisplay} />
      </Layout>
    </>
  );
}

export default MyApp;

//src={`https://www.googletagmanager.com/gtag/js?id=${process.env.ANALYTICS_ID}`}

/*

  2) Have something happen while page is loading



*/
