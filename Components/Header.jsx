import {
  Box,
  Container,
  IconButton,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../Services";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
          <Box display={["flex", "block", "block"]} float={["", "left", ""]}>
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
              <IconButton
                colorScheme="blue"
                onClick={onOpen}
                icon={<GiHamburgerMenu />}
              />

              <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                  
                  <DrawerCloseButton />
                  <DrawerHeader borderBottomWidth="1px">
                    Categories
                  </DrawerHeader>
                  <DrawerBody>
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
                          borderBottom=""
                          borderBottomWidth="1px"
                          onClick={onClose}
                        >
                          {category.name}
                        </Text>
                      </Link>
                    ))}
                  </DrawerBody>
                </DrawerContent>
              </Drawer>
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
