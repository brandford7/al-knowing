import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Head from "next/head";

import { PostWidget, PostCard, Categories } from "../Components";
import { FeaturedPosts } from "../sections";

import { fetchPosts } from "../Services";

export default function Home({ posts }) {
  return (
    <Container px="10" mx="auto" mb="8" maxW="container.xl">
      <Head>
        <title>All Knowing News</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <FeaturedPosts />
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(12,1fr)"]}
        gap={["0", "2", "12"]}
      >
        <GridItem colSpan={["1", "1", "8"]}>
          {posts.map((post) => (
            <>
              {" "}
              <PostCard post={post.node} key={post.title} />
            </>
          ))}
        </GridItem>
        <GridItem colSpan={["1", "1", "4"]}>
          <Box pos={["relative", "relative", "sticky"]} top="8">
            <PostWidget />
            <Categories />
          </Box>
        </GridItem>
      </Grid>
    </Container>
  );
}

export async function getStaticProps() {
  const posts = (await fetchPosts()) || [];

  return {
    props: { posts },
    revalidate:9
  };
}
