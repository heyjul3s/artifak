import { BlockBase, createBlocks } from './src';

export function BlockBaseUsage() {
  return <BlockBase>A Block Base</BlockBase>;
}

const base = {
  styles: {
    width: '100%',
    maxWidth: ['480px', '768px', '1024px', '1200px'],
    padding: ['1em', '1.5em'],
    margin: '0 auto'
  }
};

const components = {
  FlexContainer: {
    display: 'flex'
  },

  UnpaddedContainer: {
    padding: 0
  }
};

const { FlexContainer, UnpaddedContainer } = createBlocks<typeof components>(
  base,
  components
);

export function CreateBlocksUsage() {
  return (
    <>
      <FlexContainer>Flex Container</FlexContainer>
      <UnpaddedContainer>Unpadded Container</UnpaddedContainer>
    </>
  );
}

export default {
  title: 'Block'
};
