import React from "react";
import Head from "next/head";
import { fetchPosts, fetchPostDetails, } from "../../Services";
import {
  PostWidget,
  PostDetail,
  Categories,
  Author,
  Comments,
  CommentsForm,LoaderBar
} from "../../Components";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { AdjacentPosts } from "../../sections";




const PostDetails = ({ post }) => {
const router= useRouter()

    if (router.isFallback) {
    return <LoaderBar/>
}
  return (
    <>
      <Head>
        <title>All Knowing News</title>
        <meta name={post.title} content={post.title} />
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
            <PostDetail post={post} />
            <Author author={post.author} />
            <AdjacentPosts slug={post.slug} createdAt={post.createdAt} />
            <CommentsForm slug={post.slug} />
            <Comments slug={post.slug} />
          </GridItem>
          <GridItem colSpan={["1", "1", "4"]}>
            <Box pos={["relative", "relative", "sticky"]} top="8">
              <PostWidget
                slug={post.slug}
                categories={post.categories.map((category) => category.slug)}
              />
              <Categories />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await fetchPostDetails(params.slug);

  return {
    props: { post: data },
    revalidate : 60
  }
}

export async function getStaticPaths() {
  const posts = await fetchPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
