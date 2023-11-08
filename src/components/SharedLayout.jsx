import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import { Box, Flex } from '@chakra-ui/react';
import backgroundImage from 'images/crane/bcg.png';

const SharedLayout = () => {
  return (
    <Flex flexDirection="column" minHeight="100vh">
      <AppBar />
      <Box display="contents">
        <Suspense fallback={null}>
          <Flex
            backgroundImage={`url(${backgroundImage})`}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            flexDirection="column"
            justifyContent="space-between"
            flexGrow="1"
          >
            <Outlet />
            <Footer />
          </Flex>
        </Suspense>
      </Box>
    </Flex>
  );
};

export default SharedLayout;
