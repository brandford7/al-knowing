import { Box, chakra, Img, Text } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <>
      <Box
        pos="relative"
        bg="black"
        rounded="lg"
        opacity="0.6"
        textAlign="center"
        mt="20"
        mb="8"
        p="12"
      >
        <Box pos="absolute" left="0" right="0" top="-14">
          {" "}
          <Image
            unoptimized
            src={author.image.url}
            alt={author.name}
            height="100px"
            width="100px"
            className="align-middle rounded-full"
          />
        </Box>
        <chakra.h3 color="white" my="4" fontSize="xl" fontWeight="bold">
          {author.name}
        </chakra.h3>
        <Text color="white" fontSize="lg">
          {author.bio}
        </Text>
      </Box>
    </>
  );
};

export default Author;
