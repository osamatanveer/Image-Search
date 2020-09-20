import React from 'react';

import ImageCard from './ImageCard';
import '../../stylesheets/ImageList.css';

const ImageList = (props) => {
  const { images } = props;

  return (
    <div className='image-list'>
      {images.map((image) => {
        return <ImageCard image={image} key={image.id} />;
      })}
    </div>
  );
};

export default ImageList;
