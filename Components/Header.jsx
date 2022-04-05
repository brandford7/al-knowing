import {
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Text,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../Services";
import { GiHamburgerMenu } from "react-icons/gi";

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
          <Box display={["flex","block", "block"]} float={["", "left", ""]}>
            <Link href="/" passHref>
              <Text
                cursor="pointer"
                fontWeight="bold"
                fontSize="4xl"
                color="black"
              >
                All-Knowing
              </Text>
            </Link>
          </Box>
          <Box>
            <Box display={["flex", "none", "none"]} float="right">
              <Menu isLazy>
                <MenuButton as={IconButton} icon={<GiHamburgerMenu />} />

                <MenuList>
                  {categories.map((category) => (
                    <MenuItem>
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
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </Box>
            <Box
              display={["none", "contents", "contents"]}
              float={["", "left", "right"]}
            >
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/category/${category.slug}`}
                  passHref
                >
                  <Text
                    display=""
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
        </Box>
      </Container>
    </>
  );
};

export default Header;
