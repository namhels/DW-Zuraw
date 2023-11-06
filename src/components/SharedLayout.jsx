import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import { Suspense } from 'react';
import Footer from 'components/Footer';
import { Box, Flex } from '@chakra-ui/react';

const SharedLayout = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <AppBar />
      <Box display='contents'>
        <Suspense fallback={null} >
          <Box className="backgroundImage" pos="relative" flexGrow="1">
            <Outlet />
            <Footer />
          </Box>
        </Suspense>
      </Box>
    </Flex>
  );
};

export default SharedLayout;
