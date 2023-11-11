import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';
import { navigations } from 'db/navigations';

const Navigation = () => {
  return (
    <Flex justifyContent="center">
      <ButtonGroup display="flex" justifyContent="center" flexWrap="wrap" gap={2}>
        {navigations.map(nav => (
          <Button
            as={NavLink}
            colorScheme="teal"
            to={nav.path}
            key={nav.label}
            size={{ base: 'xs', md: 'sm', lg: 'md', xl: 'lg' }}
            _activeLink={{
              color: 'white',
              bg: 'brand',
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
