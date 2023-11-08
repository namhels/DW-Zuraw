import React from 'react';
import { SiMediamarkt } from 'react-icons/si';
import {
  Box,
  Flex,
  HStack,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
  useColorMode,
} from '@chakra-ui/react';

const RehabilitationTreatments = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex justifyContent="center">
      <Box
        maxW="container.lg"
        mt="50px"
        px="16px"
        py="32px"
        bg={colorMode === 'dark' ? 'bgDark.100' : 'bgLight.100'}
        border="2px solid cyan"
        boxShadow="brandShadow"
        rounded="md"
      >
        <Heading
          display="flex"
          justifyContent="center"
          fontSize="3xl"
          color="brand"
        >
          Zabiegi rehabilitacyne
        </Heading>
        <HStack spacing={6} alignItems="flex-start">
          <VStack py={5} spacing={4} alignItems="flex-start">
            <Heading
              w="100%"
              display="flex"
              justifyContent="center"
              fontSize="xl"
              color="green"
            >
              Masaże
            </Heading>
            <List>
              <ListItem>
                <ListIcon as={SiMediamarkt} color="green.500" />
                masaż wibracyjny.
              </ListItem>
              <ListItem>
                <ListIcon as={SiMediamarkt} color="green.500" />
                masaż w fotelu.
              </ListItem>
            </List>
            <Heading
              w="100%"
              display="flex"
              justifyContent="center"
              fontSize="xl"
              color="green"
            >
              Światłolecznictwo
            </Heading>
            <Box>
              <Text textIndent="10px">
                Światłolecznictwo jest ważne dla życia człowieka:
              </Text>
              <List>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  pobudza naturalne procesy regeneracyjne, stymulujące przemianę
                  materii komórki.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  wzmacnia układ immunologiczny i poprawia krążenie krwi.
                </ListItem>
              </List>
            </Box>
            <Text textIndent="10px">
              Światłolecznictwo znajduje zastosowanie zarówno w profilaktyce jak
              i we wspieraniu procesów leczniczych. Leczeniu podlegają nie
              bezpośrednio choroby i zranienia; to raczej własne procesy
              regeneracyjne ciała zostają uaktywnione dzięki światłu. W ten
              sposób wspomaga się organizm, by wykorzystał siły kuracji
              spontanicznej i odbudował swoją równowagę.
            </Text>
            <Box>
              <Text textIndent="10px">Zastosowanie:</Text>
              <List>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  optymalizacja metabolizmu tkanek.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  stymulacja ukrwienia i czerwonych ciałek krwi.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  wzmożenie metabolizmu komórkowego, a w następstwie tego
                  wykorzystania tlenu (oddychanie komórkowe i oddychanie płuc)
                  jak i odżywianie komórek (poprzez poprawę wchłaniania
                  elementów śladowych i minerałów).
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  stymulacja wydalania.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  leczenie w chorobach żołądka i jelit.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  pomoc w gojeniu ran, działanie antyseptyczne.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  leczenie zapaleń– uśmierzanie ataków migreny.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  leczenie bólu, również natury chronicznej.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  łagodzenie problemów skórnych, zwłaszcza alergii.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  leczenie depresji, nerwowości i zaburzeń snu.
                </ListItem>
              </List>
            </Box>
          </VStack>
          <VStack py={5} spacing={4} alignItems="flex-start">
            <Heading
              w="100%"
              display="flex"
              justifyContent="center"
              fontSize="xl"
              color="green"
            >
              Inhalacje
            </Heading>
            <Text textIndent="10px">
              Inhalacje solankowe działają korzystnie na drogi oddechowe.
              Wdychanie oparów powoduje nawilżenie dróg oddechowych,
              rozrzedzenie śluzu i łatwiejsze odkrztuszanie. Stosowanie
              inhalacji solankowych jest wskazane w przypadku chorób górnych i
              dolnych dróg oddechowych.
            </Text>
            <Text textIndent="10px">
              Inhalacja jest metodą zapobiegania i leczenia wielu schorzeń dróg
              oddechowych polegająca na wdychaniu rozpylonego środka
              leczniczego. Inhalacja znajduje zastosowanie w leczeniu różnych
              schorzeń dróg oddechowych np. astmy, alergii, infekcji płuc,
              mukowiscydozy.
            </Text>
            <Text textIndent="10px">
              Z powodzeniem można je stosować u osób przebywających w nadmiernie
              zanieczyszczonym środowisku (kurz, spaliny), palących papierosy
              czy też u tych, u których wykonywany zawód wymaga inhalacji
              nawilżających górne drogi oddechowe (np. nauczyciele, lekarze,
              wykładowcy). Również sportowcy stosują inhalacje.
            </Text>
            <Text textIndent="10px">
              Inhalacje zaleca się stosować systematycznie, nie tylko w okresach
              zaostrzenia.
            </Text>
            <Heading
              w="100%"
              display="flex"
              justifyContent="center"
              fontSize="xl"
              color="green"
            >
              Kinezyterapia
            </Heading>
            <Box>
              <Text textIndent="10px">
                Gimnastyka ogólnousprawniająca, zajęcia w siłowni z akcesoriami
                do ćwiczeń:
              </Text>
              <List>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  bieżnia.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  atlasy.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  rowerek.
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  rotor (do ćwiczeń kończyn górnych i dolnych).
                </ListItem>
              </List>
            </Box>
          </VStack>
        </HStack>
        <Text textIndent="10px" fontWeight="700">
          Oferujemy dwa zabiegi rehabilitacyjne dziennie wg zaleceń lekarza DW
          „Żuraw” (z wyłączeniem pierwszego i ostatniego dnia pobytu, sobót,
          niedziel i dni świątecznych).
        </Text>
      </Box>
    </Flex>
  );
};

export default RehabilitationTreatments;
