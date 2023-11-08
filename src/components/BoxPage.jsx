import { useColorMode, Box } from '@chakra-ui/react';
import React from 'react';

const BoxPage = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
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
      {children}
    </Box>
  );
};

export default BoxPage;
