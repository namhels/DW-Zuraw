import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, ButtonGroup } from '@chakra-ui/react';

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
    <ButtonGroup gap="2">
      {navs.map((nav) => (
        <NavLink to={nav.path} key={nav.label}>
          <Button colorScheme="teal">{nav.label}</Button>
        </NavLink>
      ))}
      {/* <Button colorScheme="teal">Główna</Button>
      <Button colorScheme="teal">Turnusy rehabilitacyjne 2021</Button>
      <Button colorScheme="teal">Zabiegi rehabilitacyjne</Button>
      <Button colorScheme="teal">O nas</Button>
      <Button colorScheme="teal">Galeria</Button>
      <Button colorScheme="teal">Kontakt</Button> */}
    </ButtonGroup>
  );
};

export default Navigation;
