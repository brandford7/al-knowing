import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../Services";
import { Box, chakra, Text } from "@chakra-ui/react";

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <Box bg="white" shadow="lg" rounded="lg" p="8" pb="12" mb="8">
          <chakra.h3
            fontWeight="semibold"
            fontSize="xl"
            mb="8"
            borderBottom="1px"
            pb="4"
          >
            {comments.length} {comments.length > 1 ? "Comments" : "Comment"}
          </chakra.h3>
          {comments.map((comment) => (
            <Box
              key={comment.createdAt}
              borderBottom="1px solid gray.100"
              mb="4"
              pb="4"
            >
              <Text mb="4">
                      <chakra.span fontWeight="semibold">{comment.name}</chakra.span>
                      {" "}
                      on
                      {" "}
                      {moment(comment.createdAt).format("MMM DD, YYYY")}
                  </Text>
                  <Text whiteSpace="pre-line" fontSize="gray.600" w='full'>{ parse(comment.comment)}</Text>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default Comments;
