import React from "react";
import { RichText } from "@graphcms/rich-text-react-renderer"
import moment from "moment";
import { Box, chakra, Img, Text } from "@chakra-ui/react";

const PostDetail = ({ post }) => {
 /* const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
       if (obj.link) {
         modifiedText = <a key={index}>{text}</a>;
       }
    }
    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "link":
        return (
          <Link key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </Link>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  }; */
  

  return (
    <>
      <Box
        bg=" white"
        shadow="lg"
        rounded="lg"
        p={["", "", "8"]}
        pb="12"
        mb="8"
      >
        <Box pos="relative" overflow="hidden" shadow="md" mb="6">
          <Img
            src={post.featuredImage.url}
            alt=""
            objectPosition="top"
            h="full"
            w="full"
            objectSize="cover"
            shadow="lg"
            roundedTop="lg"
            rounded={["", "", "lg"]}
          />
        </Box>
        <Box px={["4", "4", "0"]}>
          <Box display="flex" alignItems="center" mb="8" w="full">
            <Box
              display={["hidden", "flex", "flex"]}
              alignItems="center"
              justifyContent="center"
              mb={{ lg: "0" }}
              w={{ lg: "auto" }}
              mr="8"
            >
              <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.image.url}
              />
              <Text
                display="inline"
                verticalAlign="middle"
                color="gray.700"
                ml="2"
                fontWeight="medium"
                fontSize="lg"
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
          <chakra.h1 mb="8" fontSize="3xl" fontWeight="semibold">
            {post.title}
          </chakra.h1>
          <RichText content={post.content.raw.children} />
          {/*  {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })} */}
        </Box>
      </Box>
    </>
  );
};

export default PostDetail;
