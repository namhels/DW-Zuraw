import { Center, Heading } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Center mt="16vh">
      <Heading
        as="h1"
        size="xl"
        fontFamily="Agbalumo"
        color="brand"
        letterSpacing={2}
        fontWeight="900"
      >
        Przyjdź jako goście, wyjdź jako przyjaciele!
      </Heading>
    </Center>
  );
};

export default Home;
