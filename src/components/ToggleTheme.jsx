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
      boxSize={{ base: "14px", sm: "32px", lg: "46px" }}
      size={{ base: "9px", sm: "16px", lg: "26px" }}
      fontSize={{ base: "6px", sm: "16px", lg: "26px" }}
    />
  );
};

export default ToggleTheme;
