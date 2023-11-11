import React from 'react';
import { Heading, Icon, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import { GiPaperCrane } from 'react-icons/gi';

import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink } from '@chakra-ui/react';
import theme from 'utils/theme';

const pulse = keyframes`
0% {
  transform: scale(1);
}
50% {
  color: ${theme.colors.brand};
  transform: scale(1.5);
}
65% {
  color: #818181;
  transform: scale(1.3);
}
75% {
  color: ${theme.colors.brand};
  transform: scale(1.6);
}
85% {
  color: ${theme.colors.brand};
  transform: scale(1.3);
}
100% {
  color: #818181;
  transform: scale(1);
}
`

const Logo = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  const animation = prefersReducedMotion
    ? undefined
    : `${pulse} 1000ms infinite linear`

  return (
    <ChakraLink
      as={ReactRouterLink}
      to="/"
      className="my-box"
      _hover={{ textDecoration: 'none' }}
    >
      <Heading
        display="flex"
        alignItems="center"
        textShadow="4px 4px 3px rgba(7, 208, 234,0.6)"
        color="green"
        fontFamily="Rubik Moonrocks"
        fontSize={{ base: "24px", md: "40px", lg: "56px" }}
      >
        Dom Wczasowy
        {
          <Icon
            as={GiPaperCrane}
            mx={3}
            boxSize={{ base: "46px", md: "78px", lg: "106px" }}
            sx={{
              '.my-box:hover &': {
                animation: animation
              },
            }}
          />
        }
        Żuraw
      </Heading>
    </ChakraLink>
  );
};

export default Logo;
