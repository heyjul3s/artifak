import React from 'react';
import { Container } from './src';

export const ContainerTest = () => {
  return (
    <Container
      maxWidth={['40em', '52em', '64em', '80em']}
      style={{
        background: 'red'
      }}
    >
      <>
        <p>Hello World</p>
      </>
    </Container>
  );
};

export default {
  title: 'Container',
  component: [ContainerTest]
};
