import React from 'react';
import { Img as Image } from './';
import { StyledImage } from './ImgBase';

export const Img = () => {
  return <Image src="https://source.unsplash.com/random/10x10" alt="hello" />;
};

export default {
  title: 'Image',
  component: Img,
};
