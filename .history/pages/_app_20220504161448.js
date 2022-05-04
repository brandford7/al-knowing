import { ChakraProvider } from "@chakra-ui/react";
import '../styles/globals.scss';
import { useRouter } from 'next/router'
import Script from "next/script"
import React, {  useEffect } from "react";
import { Layout } from "../Components"
import * as gtag from "../lib/gtag";


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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Script
          
           <script data-cfasync='false' type='text/javascript' src='//p439817.clksite.com/adServe/banners?tid=439817_874235_1'></script>
          
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
