import React from 'react';
import { Heading } from '@chakra-ui/react';

const Title = ({ children }) => {
  return (
    <Heading
      w="100%"
      display="flex"
      justifyContent="center"
      fontSize={{ base: "md", md: "lg", lg: "xl" }}
      color="green"
    >{ children }</Heading>
  );
};

export default Title;
