
import { Box } from "@chakra-ui/react";
import React,{useState, useEffect} from "react";
import { Header } from ".";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
   
  return (
    <>
      <Header />

      {children}
      <ScrollToTop/>
    </>
  );
};

export default Layout;
