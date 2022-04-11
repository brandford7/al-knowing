import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { Categories, LoaderBar, PostCard } from "../../Components";
import { getCategories, getCategoryPost } from "../../Services";

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <LoaderBar />;
  }

  return (
    <>
      <Head>
        <title>Categories</title>
        <meta name="description" content="Categories" />
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Container maxW="container.xl" mx="auto" px="10" mb="8">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(12,1fr)",
          ]}
          gap="12"
        >
          <GridItem colSpan={["1", "1", "8"]}>
            {posts.map((post, index) => (
              <PostCard key={index} post={post.node} />
            ))}
          </GridItem>
          <GridItem colSpan={["1", "1", "4"]}>
            <Box pos={["relative", "relative", "sticky"]} top="8">
              <Categories />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default CategoryPost;

export async function getStaticProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
    revalidate: 10,
  };
}


export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: "blocking",
  };
}
