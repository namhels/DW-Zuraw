import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from '@chakra-ui/react';

export const App = () => {
  return (
    <div className='backgroundImage'>
      <Flex p={5} minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">DW Żuraw</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex>
    </ div>
  );
};
