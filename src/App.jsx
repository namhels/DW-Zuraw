import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout';
import { Box, useColorMode } from '@chakra-ui/react';

const HomePage = lazy(() => import('pages/Home'));
const RehabilitationStaysPage = lazy(() => import('pages/RehabilitationStays'));
const RehabilitationTreatmentsPage = lazy(() =>
  import('pages/RehabilitationTreatments')
);
const GalleryPage = lazy(() => import('pages/Gallery'));
const AboutPage = lazy(() => import('pages/About'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const { colorMode } = useColorMode();

  return (
    <Box bg={colorMode === 'dark' ? 'bgDark.200' : 'bgLight.200'}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="rehabilitation_stays"
            element={<RehabilitationStaysPage />}
          />
          <Route
            path="rehabilitation_treatments"
            element={<RehabilitationTreatmentsPage />}
          />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Box>
  );
};
