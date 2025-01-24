import { useState, useEffect } from "react";
import Layout from "@/components/common/Layout";
import "@/styles/main.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import NextProgress from "nextjs-progressbar";
import Preloader from "@/components/Preloader.js";

export default function App({ Component, pageProps }) {
  const [propsLoaded, setPropsLoaded] = useState(false);

  useEffect(() => {
    // Initialize Aos
    Aos.init({
      easing: "ease-in-out",
      duration: 8000
    });


    setTimeout(() => {
      setPropsLoaded(true);
    }, 1500); 
  }, []);

  return (
    <Layout>
      <NextProgress
        color="linear-gradient(250deg, rgba(255, 85, 219, 1) 24%, rgba(52, 108, 255, 1) 100%)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <ContentWithLoader
        propsLoaded={propsLoaded}
        Component={Component}
        pageProps={pageProps}
      />
    </Layout>
  );
}

function ContentWithLoader({ propsLoaded, Component, pageProps }) {
  return (
    <>
      {propsLoaded ? (
        <Component {...pageProps} />
      ) : (
        <div>
           <Preloader />
        </div>
       
      )}
    </>
  );
}
