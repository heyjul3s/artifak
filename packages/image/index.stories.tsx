import React from 'react';
import { Imagery as Image } from './';
import TestImg from './__mocks__/test-image.svg';

export const Img = () => {
  return <Image src={TestImg} alt="hello" />;
};

export const ImgWithTerminalError = () => {
  return <Image src="./noImage.svg" alt="hello" />;
};

export default {
  title: 'Image',
  component: [Img, ImgWithTerminalError],
};
