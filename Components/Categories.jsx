import { Box, chakra } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../Services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  },[]);

  return (
    <>
      <Box bg="white" mb="8" shadow="lg" rounded="lg" p="8" pb="12">
        <chakra.h3
          fontWeight="semibold"
          fontSize="xl"
          borderBottom="1px solid black"
          pb="4"
          mb="8"
        >
          Categories
        </chakra.h3>
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`} passHref>
            <chakra.span
              display="block"
              pb="3"
              mb="3"
              cursor="pointer"
              borderBottom="1px solid black"
            >{category.name}</chakra.span>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default Categories;
