import React from 'react';
import { SiMediamarkt } from 'react-icons/si';
import {
  Box,
  Flex,
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
        p="16px"
        bg={colorMode === 'dark' ? 'bgDark.100' : 'bgLight.100'}
        border="2px solid cyan"
        boxShadow="brandShadow"
        rounded="md"
      >
        <Heading fontSize="3xl" color="brand">
          Zabiegi rehabilitacyne
        </Heading>
        <Flex>
          <VStack py={5} spacing={4} >
            <Heading fontSize="xl" color="green">
              Masaże
            </Heading>
            <List>
              <ListItem>
                <ListIcon as={SiMediamarkt} color="green.500" />
                Masaż wibracyjny
              </ListItem>
              <ListItem>
                <ListIcon as={SiMediamarkt} color="green.500" />
                Masaż w fotelu
              </ListItem>
            </List>
            <Heading fontSize="xl" color="green">
              Światłolecznictwo
            </Heading>
            <Box>
              <Text>Światłolecznictwo jest ważne dla życia człowieka:</Text>
              <List>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  Masaż wibracyjny
                </ListItem>
                <ListItem>
                  <ListIcon as={SiMediamarkt} color="green.500" />
                  Masaż w fotelu
                </ListItem>
              </List>
            </Box>
          </VStack>
          <VStack spacing={4} align="center"></VStack>
        </Flex>
      </Box>
    </Flex>
  );
};

export default RehabilitationTreatments;
