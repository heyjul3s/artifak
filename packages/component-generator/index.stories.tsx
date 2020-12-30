import React from 'react';
import { createStyledComponent, createComponents } from './src';

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

const containers = {
  base: {
    styles: {
      width: '100%',
      maxWidth: ['480px', '740px', '900px', '1200px']
    },
    styleProps: []
  },

  components: {
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
  }
};

const { FlexContainer, Container, UnpaddedContainer } = createComponents<
  typeof containers.components
>(containers.base, containers.components);

export function BasicUsage() {
  return (
    <>
      <Container>Default Container</Container>
      <FlexContainer>Flex Container</FlexContainer>
      <UnpaddedContainer>Unpadded Container</UnpaddedContainer>
    </>
  );
}

const {
  Container: BasicContainer,
  FlexContainer: BasicFlexContainer,
  UnpaddedContainer: BasicUnpaddedContainer
} = createComponents<typeof containers.components>(
  Basic,
  containers.components
);

export function UsageWithSCbase() {
  return (
    <>
      <BasicContainer>Default Container</BasicContainer>
      <BasicFlexContainer>Flex Container</BasicFlexContainer>
      <BasicUnpaddedContainer>Unpadded Container</BasicUnpaddedContainer>
    </>
  );
}

export default {
  title: 'Generator'
};
