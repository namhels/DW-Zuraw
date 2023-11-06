import { Center } from '@chakra-ui/react';
import React from 'react';
import PopoverDev from 'components/PopoverDev';

const Footer = () => {
  return (
    <Center pos="absolute" bottom="0" h="50px" w="100%" color="white" fontWeight="700">
      © 2023 | Wszelkie prawa zastrzeżone | {<PopoverDev/>}
    </Center>
  );
};

export default Footer;
