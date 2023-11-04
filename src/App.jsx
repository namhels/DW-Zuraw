import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';
import ToggleTheme from 'components/ToggleTheme';

export const App = () => {
  return (
    <div className='backgroundImage'>
      <Flex p={5} minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Dom Wczasowy Żuraw</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Turnusy rehabilitacyjne 2021</Button>
          <Button colorScheme="teal">Zabiegi rehabilitacyjne</Button>
          <Button colorScheme="teal">O nas</Button>
          <Button colorScheme="teal">Galeria</Button>
          <Button colorScheme="teal">Kontakt</Button>
        </ButtonGroup>
        <Spacer />
        <ToggleTheme />
      </Flex>
    </ div>
  );
};


