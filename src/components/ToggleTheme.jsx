import { FaMoon, FaSun } from 'react-icons/fa';
import { IconButton, useColorMode } from '@chakra-ui/react';

const ToggleTheme = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <IconButton
      colorScheme="green"
      aria-label="toggle theme"
      rounded="full"
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
      boxSize={{ base: "24px", md: "32px", lg: "46px" }}
    />
  );
};

export default ToggleTheme;
