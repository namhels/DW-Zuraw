import React from 'react';

import { GiSmartphone } from 'react-icons/gi';
import { MdOutlineEmail, MdLocationPin } from 'react-icons/md';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Box,
  List,
  ListItem,
  ListIcon,
  Link,
} from '@chakra-ui/react';

const PopoverDev = () => {
  return (
    <Popover placement="top" computePositionOnMount="true">
      <PopoverTrigger>
        <Box
          as="button"
          transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
          border="2px"
          ml="5px"
          px="8px"
          borderRadius="5px"
          fontWeight="700"
          borderColor="white"
          color="white"
          _hover={{ transform: 'scale(1.05)', borderColor: 'brand' }}
        >
          Opracowany przez namhels
        </Box>
      </PopoverTrigger>
      <PopoverContent bg="teal" color="white">
        <PopoverArrow bg="brand" />
        <PopoverCloseButton />
        <PopoverHeader>Kontakty deweloperskie:</PopoverHeader>
        <PopoverBody>
          <List spacing={2}>
            <ListItem>
              <Link href="tel:+48576558744">
                <ListIcon as={GiSmartphone} />
                +48 576 558 744
              </Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:8.lsv.888@gmail.com">
                <ListIcon as={MdOutlineEmail} />
                8.lsv.888@gmail.com
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.github.com/namhels" isExternal>
                <ListIcon as={AiFillGithub} />
                github.com/namhels
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/serhii-lekhman"
                isExternal
              >
                <ListIcon as={AiOutlineLinkedin} />
                linkedin.com/in/serhii-lekhman
              </Link>
            </ListItem>
            <ListItem>
              <ListIcon as={MdLocationPin} />
              Polska, Rabka-Zdrój
            </ListItem>
          </List>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverDev;
