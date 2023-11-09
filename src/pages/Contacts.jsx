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
            <Link href="mailto:8.lsv.888@gmail.com">
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
            <AspectRatio ratio={16 / 9}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d671.6051703526367!2d19.96879294568675!3d49.59900348147784!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4715e1d495b24c33%3A0xec61f7f27a75e7f5!2zRFcgxbt1cmF3!5e0!3m2!1sru!2spl!4v1699516813458!5m2!1sru!2spl"  title="34-700, Rabka - Zdrój, Ul. Krótka 8"/>
            {/* width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" */}
            </AspectRatio>
          </ListItem>
        </List>
      </BoxPage>
    </Flex>
  );
};

export default Contact;
