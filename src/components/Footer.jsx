import { Flex } from '@chakra-ui/react';
import React from 'react';
import PopoverDev from 'components/PopoverDev';

const Footer = () => {
  return (
    <Flex
      flexDirection={{ base: "column", md: "row" }}
      justifyContent="center"
      alignItems="center"
      h="50px"
      mt="50px"
      w="100%"
      color="white"
      fontWeight="700"
    >
      © 2023 | Wszelkie prawa zastrzeżone {<PopoverDev />}
    </Flex>
  );
};

export default Footer;
