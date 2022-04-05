import { Box, chakra, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import moment from "moment";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <>
      <Box
        bg="white"
        shadow="lg"
        rounded="lg"
        p={["0", "0", "8"]}
        pb="12"
        mb="8"
      >
        <Box pos="relative" pb="80" mb="6" overflow="hidden" shadow="md">
          <Img
            src={post.featuredImage.url}
            alt={post.title}
            objectPosition="top"
            w="full"
            objectFit="cover"
            pos="absolute"
            h="80"
            shadow="lg"
            roundedTop="lg"
            rounded={["md", "md", "lg"]}
          />
        </Box>
        <Heading
          transitionDuration="700"
          textAlign="center"
          mb="8"
          fontSize={["1rem", "1.5rem", "1.5rem"]}
          cursor="pointer"
          _hover={{
            color: "pink.600",
            fontSize: "3xl",
            fontWeight: "semibold",
          }}
        >
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </Heading>
        <Box
          display={["block", "block", "flex"]}
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          mb="8"
          w="full"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={["4", "4", "0"]}
            w={["full", "full", "auto"]}
            mr="8"
          >
            <Img
              src={post.author.image.url}
              alt={post.author.name}
              h="30px"
              w="30px"
              rounded="full"
            />
            <Text
              display="inline"
              color="gray.700"
              fontSize="lg"
              ml="2"
              textAlign="center"
            >
              {post.author.name}
            </Text>
          </Box>
          <Box fontSize="md" color="gray.700">
            <chakra.svg
              xmlns="http://www.w3.org/2000/svg"
              h="6"
              w="6"
              display="inline"
              mr="2"
              color="pink.500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </chakra.svg>
            <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
          </Box>
        </Box>
        <Text
          fontSize="lg"
          fontWeight="normal"
          color="gray.700"
          textAlign="center"
          px={["4", "4", "20"]}
          mb="8"
        >
          {post.excerpt}
        </Text>
        <Box textAlign="center">
          <Link href={`/post/${post.slug}`} passHref>
            <chakra.span
              display="inline-block"
              bg="pink.600"
              fontSize="lg"
              rounded="full"
              px="8"
              py="3"
              color="white"
              cursor="pointer"
              transitionDuration="500"
              _hover={{
                transform: "translate(1)",
              }}
            >
              {/*fix the hover transition problem*/}
              Continue Reading
            </chakra.span>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default PostCard;
