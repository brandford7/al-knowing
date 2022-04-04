import { Box, Button ,Spinner} from '@chakra-ui/react'
import React from 'react'

const LoaderBar = () => {
    return (
      <Box textAlign="center">
        <Button display="inline-flex" align="center" px="4" py="2" disabled="">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Button>
      </Box>
    );
}

export default LoaderBar
