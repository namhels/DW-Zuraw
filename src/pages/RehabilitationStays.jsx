import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  useColorMode,
} from '@chakra-ui/react';

const RehabilitationStays = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex justifyContent="center">
      <TableContainer
        maxW="container.lg"
        mt="50px"
        px="16px"
        pb="32px"
        bg={colorMode === 'dark' ? 'bgDark.100' : 'bgLight.100'}
        border="2px solid cyan"
        boxShadow="brandShadow"
        rounded="md"
      >
        <Table variant="striped" colorScheme="teal">
          <TableCaption
            placement="top"
            fontSize="3xl"
            fontWeight="700"
            color="brand"
          >
            Turnusy rehabilitacyjne 2021
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Data</Th>
              <Th>Uczestnik</Th>
              <Th>Opiekun</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>25.06-08.07</Td>
              <Td>2000 zł</Td>
              <Td>1950 zł</Td>
            </Tr>
            <Tr>
              <Td>09.07-22.07</Td>
              <Td>2000 zł</Td>
              <Td>1950 zł</Td>
            </Tr>
            <Tr>
              <Td>23.07-05.08</Td>
              <Td>2000 zł</Td>
              <Td>1950 zł</Td>
            </Tr>
            <Tr>
              <Td>06.08-19.08</Td>
              <Td>2000 zł</Td>
              <Td>1950 zł</Td>
            </Tr>
            <Tr>
              <Td>20.08-02.09</Td>
              <Td>2000 zł</Td>
              <Td>1950 zł</Td>
            </Tr>
            <Tr>
              <Td>04.09-17.09</Td>
              <Td>2000 zł</Td>
              <Td>1950 zł</Td>
            </Tr>
            <Tr>
              <Td>18.09-01.10</Td>
              <Td>2000 zł</Td>
              <Td>1950 zł</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Flex>
  );
};

export default RehabilitationStays;
