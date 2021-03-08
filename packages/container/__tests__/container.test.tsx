import { Container } from '../src';
import React from 'react';
import { render } from '@testing-library/react';

describe('@artifak/container', () => {
  it('renders', () => {
    const { asFragment } = render(
      <Container>
        <>
          <p>Hello World</p>
        </>
      </Container>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders', () => {
    const { asFragment } = render(
      <Container maxWidth={['40em', '52em', '64em', '80em']}>
        <>
          <p>Hello World</p>
        </>
      </Container>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
