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
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <Logo />
        <ToggleTheme />
      </Flex>
      <Navigation />
    </>
  );
};

export default AppBar;
