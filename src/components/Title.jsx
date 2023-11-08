import React from 'react';
import { Heading } from '@chakra-ui/react';

const Title = ({ children }) => {
  return (
    <Heading
      w="100%"
      display="flex"
      justifyContent="center"
      fontSize="xl"
      color="green"
    >{ children }</Heading>
  );
};

export default Title;
