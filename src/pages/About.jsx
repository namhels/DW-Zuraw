import React from 'react';
import { Flex, Image, Text, VStack } from '@chakra-ui/react';
import BoxPage from 'components/BoxPage';
import TitlePage from 'components/TitlePage';

import doc1 from 'images/docs/doc1.webp'
import doc2 from 'images/docs/doc2.webp'
import doc3 from 'images/docs/doc3.webp'

const About = () => {
  return (
    <Flex justifyContent="center">
      <BoxPage>
        <TitlePage>O nas</TitlePage>
        <VStack spacing={4} py={5}>
          <Text textIndent="10px">
            Przedmiotem naszej działalności jest organizowanie „turnusów
            rehabilitacyjnych”, „wycieczek”, „zielonych i białych szkół”, „
            kolonii letnich”, „zimowisk” oraz wczasów rodzinnych.
          </Text>
          <Text textIndent="10px">
            Obiekt jest ogrodzony, posiada parking samochodowy, siłownię, stół
            do ping-ponga, własny plac zabaw dla dzieci, miejsce na ognisko,
            możliwość gry w koszykówkę, siatkówkę itp.
          </Text>
          <Text textIndent="10px">
            W parku zdrojowym można skorzystać z kortów tenisowych, ścieżki
            zdrowia i placu zabaw. Regionalna architektura miejska stwarza
            niepowtarzalny klimat tak charakterystyczny dla Rabki. Miasto Rabka
            otwarte jest dla turystów a w sposób szczególny tradycyjnie dla
            dzieci i młodzieży. Pragnie uatrakcyjniać zdrowy wypoczynek
            niezależnie od pory roku i pozostawić miłe wspomnienia.
          </Text>
        </VStack>
        <Text textIndent="10px" fontWeight="700">
          Ośrodek posiada wpis do rejestru „Organizatorów turnusów
          rehabilitacyjnych”
        </Text>
        <Flex justifyContent="center" gap={4} mt={5}>
          <Image
            src={doc1}
            alt="Organizers of rehabilitation stays"
          />
          <Image
            src={doc2}
            alt="Organizers of rehabilitation stays"
          />
          <Image
            src={doc3}
            alt="Organizers of rehabilitation stays"
          />
        </Flex>
      </BoxPage>
    </Flex>
  );
};

export default About;
