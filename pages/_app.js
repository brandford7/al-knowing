import { ChakraProvider } from "@chakra-ui/react";
import '../styles/globals.scss';
import { useRouter } from 'next/router'
import Script from "next/script"
import React, {  useEffect } from "react";
import { Layout } from "../Components"



function MyApp({ Component, pageProps }) {

 const router = useRouter();
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
      
   
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
