import React from 'react';
import { Img as Image } from './';

export const Img = () => {
  return <Image src="https://source.unsplash.com/random/10x10" alt="hello" />;
};

export const ImgErrorWithFallback = () => {
  return (
    <Image
      src="https://source.unsplashs.com/random/10x10"
      fallbackSrc="https://source.unsplash.com/random/10x10"
      alt="hello"
    />
  );
};

export const ImgWithTerminalError = () => {
  return (
    <Image
      src="https://source.unsplashs.com/random/10x10"
      fallbackSrc="https://source.unspslash.com/random/10x10"
      alt="hello"
    />
  );
};

export const ImgBackground = () => {
  return (
    <Image
      src="https://source.unsplash.com/random/10x10"
      alt="hello"
      fit="cover"
      style={{
        display: 'flex',
        height: ['200px', '300px', '400px'],
      }}
    >
      <h1>Hello World</h1>
      <p>lorem ipsum dolor sit amet</p>
    </Image>
  );
};

export default {
  title: 'Image',
  component: [Img, ImgErrorWithFallback, ImgWithTerminalError, ImgBackground],
};
