import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { navigations } from 'db/navigations';

const Navigation = () => {
  return (
    <Flex justifyContent="center">
      <ButtonGroup gap="2">
        {navigations.map(nav => (
          <Button
            as={NavLink}
            colorScheme="teal"
            to={nav.path}
            key={nav.label}
            _activeLink={{
              color: 'teal.500',
              bg: 'transparent',
              borderColor: 'teal.500',
              borderWidth: '2px',
            }}
          >
            {nav.label}
          </Button>
        ))}
      </ButtonGroup>
    </Flex>
  );
};

export default Navigation;
