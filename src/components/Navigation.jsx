import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup, Flex } from '@chakra-ui/react';

const navs = [
  {
    label: 'Główna',
    path: '/',
  },
  {
    label: 'Turnusy rehabilitacyjne 2021',
    path: '/rehabilitation_stays',
  },
  {
    label: 'Zabiegi rehabilitacyjne',
    path: '/rehabilitation_treatments',
  },
  {
    label: 'Galeria',
    path: '/gallery',
  },
  {
    label: 'O nas',
    path: '/about',
  },
  {
    label: 'Kontakt',
    path: '/contact',
  },
];

const Navigation = () => {
  return (
    <Flex justifyContent="center">
      <ButtonGroup gap="2">
        {navs.map(nav => (
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
