import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { GiPaperCrane } from "react-icons/gi";

const Logo = () => {
  return (
    <Box p="2">
      <Heading size="lg">Dom Wczasowy {<GiPaperCrane/>}Żuraw</Heading>
    </Box>
  );
};

export default Logo;
