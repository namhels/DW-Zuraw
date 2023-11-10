import React from 'react';
import {
  AspectRatio,
  Flex,
  HStack,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from '@chakra-ui/react';
import { GiSmartphone } from 'react-icons/gi';
import { MdOutlineEmail, MdLocationPin } from 'react-icons/md';

import BoxPage from 'components/BoxPage';
import TitlePage from 'components/TitlePage';
import Title from 'components/Title';

const Contact = () => {
  return (
    <Flex justifyContent="center">
      <BoxPage>
        <TitlePage>Kontakty</TitlePage>
        <List spacing={4} py={5}>
          <ListItem>
            <Link href="tel:+48604175046" textDecoration="none">
              <HStack spacing={14}>
                <HStack>
                  <ListIcon as={GiSmartphone} color="brand" />
                  <Title>Telefon</Title>
                </HStack>
                <Text>+48604175046</Text>
              </HStack>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:domwczasowyzuraw@op.pl">
              <HStack spacing={14}>
                <HStack>
                  <ListIcon as={MdOutlineEmail} color="brand" />
                  <Title>E-mail</Title>
                </HStack>
                <Text>domwczasowyzuraw@op.pl</Text>
              </HStack>
            </Link>
          </ListItem>
          <ListItem>
            <HStack spacing={14}>
              <HStack>
                <ListIcon as={MdLocationPin} color="brand" />
                <Title>Adres</Title>
              </HStack>
              <Text>34-700, Rabka - Zdrój, Ul. Krótka 8</Text>
            </HStack>
            <AspectRatio
              width="767px"
              mt={10}
              ratio={16 / 9}
              border="2px solid green"
              rounded="md"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d646.4833747798532!2d19.9687929!3d49.5990035!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e1d495b24c33%3A0xec61f7f27a75e7f5!2zRFcgxbt1cmF3!5e0!3m2!1spl!2spl!4v1699539504591!5m2!1spl!2spl"
                width="800"
                height="600"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="34-700, Rabka - Zdrój, Ul. Krótka 8"
              />
            </AspectRatio>
          </ListItem>
        </List>
      </BoxPage>
    </Flex>
  );
};

export default Contact;
