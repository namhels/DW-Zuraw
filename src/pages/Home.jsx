import { Center, Heading } from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Center mt="16vh">
      <Heading
        as="h1"
        fontFamily="Agbalumo"
        fontWeight="900"
        color="brand"
        textShadow="4px 4px 3px rgba(7, 208, 234,0.6)"
        letterSpacing={2}
        textAlign="center"
        fontSize={{ base: "34px", md: "55px", lg: "67px" }}
      >
        Przyjdź jako goście,<br/> wyjdź jako przyjaciele!
      </Heading>
    </Center>
  );
};

export default Home;
