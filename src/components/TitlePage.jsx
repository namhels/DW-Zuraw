import React from 'react';
import { Heading } from '@chakra-ui/react';

const TitlePage = ({ children }) => {
  return (
    <Heading
      display="flex"
      justifyContent="center"
      fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
      color="brand"
    >
      {children}
    </Heading>
  );
};

export default TitlePage;
