import { Box, Container, Text } from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { getCategories } from "../Services";
import { HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <>
      <Container mx="auto" px="10" mb="8" w="100%" maxW="container.xl">
        <Box
          display="inline-block"
          borderBottom="1px solid blue"
          py="8"
          w="100%"
          borderBottomWidth="full"
        >
          <Box display="block" float={["", "left", ""]}>
            <Link href="/" passHref>
              <Text
                cursor="pointer"
                fontWeight="bold"
                fontSize="4xl"
                color="black"
              >
                All Knowing News
              </Text>
            </Link>
          </Box>
          <Box
            display={["none", "contents", "contents"]}
            float={["", "left", ""]}
          >
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                passHref
              >
                <Text
                  float={["", "right", "right"]}
                  ml="4"
                  mt="2"
                  cursor="pointer"
                >
                  {category.name}
                </Text>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Header;
