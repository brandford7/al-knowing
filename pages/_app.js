import { Box, ChakraProvider } from "@chakra-ui/react";
import '../styles/globals.scss';
import Head from "next/head";
import React, { useState, useEffect } from "react";
import {Layout} from "../Components"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
   
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
