import React from 'react';
import { Flex, HStack, Link, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
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
              <HStack spacing={2}>
                <ListIcon as={GiSmartphone} />
                <Title>Telefon</Title>
                <Text>+48604175046</Text>
              </HStack>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto:8.lsv.888@gmail.com">
              <ListIcon as={MdOutlineEmail} />
              <Title>Telefon</Title>
              8.lsv.888@gmail.com
            </Link>
          </ListItem>
          <ListItem>
            <ListIcon as={MdLocationPin} />
            <Title>Telefon</Title>
            Polska, Rabka-Zdrój
          </ListItem>
        </List>
      </BoxPage>
    </Flex>
  );
};

export default Contact;
