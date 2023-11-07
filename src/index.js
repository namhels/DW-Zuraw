import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import { App } from 'App';
import theme from 'utils/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/DW-Zuraw">
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </BrowserRouter>
);
