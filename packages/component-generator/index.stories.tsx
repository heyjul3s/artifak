import React from 'react';
import { createStyledComponent, createBaseComponents } from './src';

const Basic = createStyledComponent({
  styles: {
    width: '100%',
    maxWidth: ['480px', '740px', '900px', '1200px']
  }
});

export function CreateStyledComponentBasicUse() {
  return (
    <>
      <Basic>hello</Basic>
    </>
  );
}

const containerConfig = {
  Base: {
    styles: {
      width: '100%',
      maxWidth: ['480px', '740px', '900px', '1200px']
    }
  },

  FlexContainer: {
    display: 'flex'
  },

  Container: {
    padding: ['1em', '1.5em']
  },

  UnpaddedContainer: {
    margin: 0,
    padding: 0
  }
};

const { FlexContainer, Container, UnpaddedContainer } = createBaseComponents<
  typeof containerConfig
>(containerConfig);

export function BasicUsage() {
  return (
    <>
      <Container>Default Container</Container>
      <FlexContainer>Flex Container</FlexContainer>
      <UnpaddedContainer>Unpadded Container</UnpaddedContainer>
    </>
  );
}

export default {
  title: 'Generator'
};
