import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import { Box, chakra, Img, Text } from "@chakra-ui/react";

const PostDetail = ({ post }) => {
const details = (
  <>
    <RichText
      content={post.content.raw.children}
      renderers={{
        h1: ({ children }) => <h1>{children}</h1>,
        blockquote: ({ children }) => <blockquote>{children}</blockquote>,
        a: ({ children, href, openInNewTab }) => (
          <a
            href={href}
            target={openInNewTab ? "_blank" : "_self"}
            style={{ color: "blue" }}
            rel="noreferrer"
          >
            <u> {children}</u>
          </a>
        ),
        h2: ({ children }) => <h2 style={{ color: "darkcyan" }}>{children}</h2>,

        h4: ({ children }) => (
          <h4 className="text-md font-semibold mb-4">{children}</h4>
        ),
        bold: ({ children }) => <strong>{children}</strong>,
        p: ({ children }) => <p className="mb-8 ">{children}</p>,

        code_block: ({ children }) => {
          return (
            <pre>
              <code>{children}</code>
            </pre>
          );
        },
        Asset: {
          application: () => (
            <div>
              <p>Asset</p>
            </div>
          ),
          text: () => (
            <div>
              <p >text plain</p>
            </div>
          ),
        },
      }}
    />
  </>
);

  return (
    <React.Fragment>
      <Box
        bg=" white"
        shadow="lg"
        rounded="lg"
        p={["", "", "8"]}
        pb="12"
        mb="8"
        maxH='auto' 
      >
        <Box pos="relative" overflow="hidden" shadow="md" mb="4">
          <Img
            src={post.featuredImage.url}
            alt={post.title}
            objectPosition="top"
            h="full"
            w="full"
            objectSize="cover"
        
            shadow="lg"
            roundedTop="lg"
            rounded={["", "", "lg"]}
          />
        </Box>
        <Box  px={["4", "4", "0"]} overflow="hidden" >
          <Box display="flex" alignItems="center" mb="8" w="full">
            <Box
              display={["hidden", "flex", "flex"]}
              alignItems="center"
              justifyContent="center"
              mb={["", "", "0"]}
              w={["", "", "auto"]}
              mr="8"
            >
              <Img
                alt={post.author.name}
                h="30px"
                w="30px"
                verticalAlign="middle"
                rounded="full"
                src={post.author.image.url}
              />
              <Text
                display="inline"
                verticalAlign="middle"
                color="gray.700"
                ml="2"
                fontWeight="medium"
                fontSize={["md", "md", "lg"]}
              >
                {post.author.name}
              </Text>
            </Box>
            <Box fontWeight="medium" color="gray.700">
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
              <chakra.span verticalAlign="middle">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </chakra.span>
            </Box>
          </Box>
          <chakra.h1
            mb="8"
            fontSize={["md", "md", "2xl"]}
            fontWeight="semibold"
          >
            {post.title}
          </chakra.h1>
          <Box fontSize={['10','10','16px']}  fontStyle='normal' fontWeight='' >{details}</Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PostDetail;
