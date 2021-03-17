/* eslint-disable no-plusplus */
import React from 'react';
import ImageMasonry from 'react-image-masonry';
import './styles.css';

const PhotoUpload = () => {
  const images = [];
  for (let i = 0; i < 200; i++) {
    const ih = 200 + Math.floor(Math.random() * 100);
    const iw = 300 + Math.floor(Math.random() * 500);
    images.push(`https://unsplash.it/${iw}/${ih}/?random?sig=${i}`);
  }

  return (
    <div>
      <div className="content" />
      <ImageMasonry
        imageUrls={images}
        numCols={5}
        containerWidth="100%"
      />
    </div>
  );
};

export default PhotoUpload;
