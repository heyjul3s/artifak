import { BlockBase } from 'artifak';

export function BlockBaseDemo({ children }) {
  return (
    <BlockBase maxWidth={['300px', '768px', '1024px', '1200px']}>
      {children}
    </BlockBase>
  );
}

export const BlockBaseUsage = `
  import { BlockBase } from 'artifak';

  // You can use BlockBase to create say for example, your site container.
  export function Container({ children }) {
    return (
      <BlockBase maxWidth={['300px', '768px', '1024px', '1200px']}>
        {children}
      </BlockBase>
    );
  }

  //...and then use like so.
  <Container>
    <Article>
      ...
    </Article
  </Container>
`;
