import { BlockBase, createBlockComponents } from './src';

export function BlockBaseUsage() {
  return <BlockBase>A Block Base</BlockBase>;
}

const settings = {
  Base: {
    styles: {
      width: '100%',
      maxWidth: ['480px', '768px', '1024px', '1200px'],
      padding: ['1em', '1.5em'],
      margin: '0 auto'
    }
  },

  FlexContainer: {
    display: 'flex'
  },

  UnpaddedContainer: {
    padding: 0
  }
};

const {
  Base: Container,
  FlexContainer,
  UnpaddedContainer
} = createBlockComponents<typeof settings>(settings);

export function CreateBlocksUsage() {
  return (
    <>
      <Container>Container</Container>
      <FlexContainer>Flex Container</FlexContainer>
      <UnpaddedContainer>Unpadded Container</UnpaddedContainer>
    </>
  );
}

export default {
  title: 'Block'
};
