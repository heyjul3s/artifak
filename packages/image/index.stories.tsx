import React from 'react';
import { Imagery as Image } from './';
import TestImg from './__mocks__/test-image.svg';

export const Img = () => {
  return <Image src={TestImg} alt="hello" />;
};

export const ImgErrorWithFallback = () => {
  return (
    <Image
      src="https://source.unsplashs.com/random/10x10"
      fallbackSrc={TestImg}
      alt="hello"
    />
  );
};

export const ImgWithTerminalError = () => {
  return <Image src="./noImage.svg" fallbackSrc="./noImage.svg" alt="hello" />;
};

export default {
  title: 'Image',
  component: [Img, ImgErrorWithFallback, ImgWithTerminalError],
};
