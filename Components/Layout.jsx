
import { } from "@chakra-ui/react";
import React from "react";
import { Header } from ".";

const Layout = ({children}) => {
  return (
    <>
     
        <Header />
        {children}
      
    </>
  );
};

export default Layout;
