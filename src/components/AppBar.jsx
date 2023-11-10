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
          base: '320px',
          sm: '480px',
          md: '768px',
          lg: '992px',
          xl: '1280px',
          '2xl': '1536px',
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
