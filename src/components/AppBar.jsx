import React from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import ToggleTheme from 'components/ToggleTheme';

const AppBar = () => {
  return (
    <>
      <Flex
        p={5}
        alignItems="center"
        gap="2"
        minWidth={{
          base: '300px',
          sm: '460px',
          md: '748px',
          lg: '972px',
          xl: '1260px',
          '2xl': '1516px',
        }}
      >
        <Logo />
        <Spacer />
        <ToggleTheme />
      </Flex>
      <Navigation />
    </>
  );
};

export default AppBar;
