import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  chakra,
  Grid,
  Textarea,
  Input,
  Text,
  Button,
} from "@chakra-ui/react";
import { submitComment } from "../Services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
      nameEl.current.value = window.localStorage.getItem("name");
      emailEl.current.value = window.localStorage.getItem("email");
  });

  const handleSubmit = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;
    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = { name, email, comment, slug };
    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }
    submitComment(commentObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };
  return (
    <>
      <Box bg="white" shadow="lg" rounded="lg" p="8" pb="12" my="8">
        <chakra.h3
          fontSize="xl"
          mb="8"
          fontWeight="semibold"
          borderBottom="1px solid gray"
          pb="4"
        >
          Leave a reply
        </chakra.h3>
        <Grid templateColumns="repeat(1,1fr)" gap="4" mb="4">
          <Textarea
            placeholder="Comment"
            name="comment"
            ref={commentEl}
            p="4"
            outline="none"
            w="full"
            rounded="lg"
            bg="gray.100"
            focus=""
            color="gray.700"
          />
        </Grid>
        <Grid
          templateColumns={["repeat(1,1fr)", "repeat(1,1fr)", "repeat(2,1fr)"]}
          gap="4"
          mb="4"
        >
          <Input
            placeholder="Name"
            name="name"
            ref={nameEl}
            py="2 "
            px="4"
            outline="none"
            w="full"
            rounded="lg"
            bg="gray.100"
            focus=""
            color="gray.700"
          />
          <Input
            placeholder="Email"
            name="email"
            ref={emailEl}
            py="2 "
            px="4"
            outline="none"
            w="full"
            rounded="lg"
            bg="gray.100"
            focus=""
            color="gray.700"
          />
        </Grid>
        <Grid templateColumns="repeat(1,1fr)" gap="4" mb="4">
          <input
            type="checkbox"
            id="storeData"
            name="storeData"
            value={true}
            ref={storeDataEl}
          />
          <chakra.label
            color="gray.500"
            cursor="pointer"
            htmlFor="storeData"
            ml="2"
          >
            Save my details for future comments
          </chakra.label>
        </Grid>
        {error && (
          <Text fontSize="xs" color="red">
            All fields are required
          </Text>
        )}
        <Box mt="8">
          <Button
            display="inline-block"
            transitionDuration="500"
            transitionTimingFunction="ease-in"
            fontSize="lg"
            color="white"
            bg="pink"
            cursor="pointer"
            _hover={{ bg: "indigo" }}
            type="button"
            onClick={handleSubmit}
          >
            Submit Comment
          </Button>
          {showSuccessMessage && (
            <chakra.span
              mt="3"
              fontWeight="semibold"
              float="right"
              fontSize={["sm", "md", "xl"]}
              color="green.500"
            >
              Comment submiited for review
            </chakra.span>
          )}
        </Box>
      </Box>
    </>
  );
};

export default CommentsForm;
