import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: '#f02c9d',
    bgLight: {
      100: "#f9f1ed",
      200: '#fbe4d7',
    },
    bgDark: {
      100: "#265d84",
      200: '#052c49',
    },
  },
  shadows: {
    brandShadow: '0px 2px 8px 1px rgba(240,44,157,0.75)',
  },
});

export default theme;
