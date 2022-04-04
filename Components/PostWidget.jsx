import { Box, chakra, Img, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../Services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    }
  }, [slug,categories]);

  console.log(relatedPosts);

  return (
    <>
      <Box bg="white" mb="8" shadow="lg" rounded="lg" p="8">
        <chakra.h3
          fontWeight="semibold"
          fontSize="xl"
          borderBottom="1px solid black"
          pb="4"
          mb="8"
        >
          {slug ? "Related Posts" : "Recent Posts"}
        </chakra.h3>
        {relatedPosts.map((post) => (
          <Box
            key={post.title}
            display="flex"
            alignItems="center"
            w="full"
            mb="4"
          >
            <Box w="16" flexGrow="0" flexShrink="0">
              <Img
                src={post.featuredImage.url}
                alt={post.title}
                verticalAlign="middle"
                h="60px"
                w="60px"
                cursor="pointer"
              />
            </Box>
            <Box flexGrow="1" ml="4">
              <Text fontSize="xs" color="gray.600">
                {moment(post.createdAt).format("MMM DD,YYYY")}
              </Text>
              <Link href={`/post/${post.slug}`} fontSize="md">{post.title}</Link>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default PostWidget;
