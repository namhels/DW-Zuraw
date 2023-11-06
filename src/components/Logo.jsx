import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { GiPaperCrane } from 'react-icons/gi';

// import { extendTheme } from '@chakra-ui/react'
// import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

// const underline = defineStyle({
//     color: "orange.500",
//     borderBottom: "2px",
//     borderRadius: "10",
//     fontFamily: "serif",
//     // let's also provide dark mode alternatives
//     _dark: {
//         color: 'orange.400',
//     },
//     _hover: {
//         borderColor: "red.200",
//         _dark: {
//             borderColor: "red.300"
//         }
//     }
// })

// const headingTheme = defineStyleConfig({
//   variants: {
//       "underline": underline
//     },
//   })

// export const theme = extendTheme({
//   components: { Heading: headingTheme },
// })

const Logo = () => {
  return (
    <Box p="2">
      <Heading
        display="flex"
        alignItems="center"
        textShadow="4px 4px 3px rgba(141, 193, 50,0.6)"
        color="green"
        size="2xl"
        _hover={{
          color: "red.500",
          transform: "scale(1.05)",
          transition: "all 0.3s linear"
        }}
      >
        Dom Wczasowy {<GiPaperCrane size="72" />}Żuraw
      </Heading>
    </Box>
  );
};

export default Logo;
