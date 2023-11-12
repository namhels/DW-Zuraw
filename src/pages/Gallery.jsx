import { Flex } from '@chakra-ui/react';
import BoxPage from 'components/BoxPage';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import { images } from 'db/photoGallery';

class Gallery extends React.Component {
  render() {
    return (
      <Flex justifyContent="center">
        <BoxPage>
          <ImageGallery
            w={{
              base: '2xs',
              sm: 'xl',
              md: '2xl',
              lg: '4xl',
              xl: '5xl',
              '2xl': '6xl',
            }}
            items={images}
          />
        </BoxPage>
      </Flex>
    );
  }
}

export default Gallery;
