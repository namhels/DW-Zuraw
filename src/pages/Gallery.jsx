import { Flex } from '@chakra-ui/react';
import BoxPage from 'components/BoxPage';
import React from 'react';
import ImageGallery from 'react-image-gallery';
import {images} from 'db/photoGallery'

class Gallery extends React.Component {
  render() {
    return (
      <Flex justifyContent="center">
        <BoxPage>
          <ImageGallery items={images} />
        </BoxPage>
      </Flex>
    );
  }
}

export default Gallery;
