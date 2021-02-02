import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Container } from './Container';
import { HTMLhead, HTMLheadProps } from './HTMLhead';
import { Header } from './Header';
import { Footer } from './Footer';
import { NavTop } from './NavTop/NavTop';

type LayoutProps = {
  children: React.ReactChildren | React.ReactElement;
} & HTMLheadProps;

export function Layout({
  title,
  description,
  canonical,
  additionalMetaTags = [],
  children
}: LayoutProps) {
  const router = useRouter();

  return (
    <>
      <HTMLhead
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={additionalMetaTags}
      />

      <NavTop />

      {router.pathname === '/' && <Header />}

      <Main>
        <Container
          style={{
            paddingRight: '1em',
            paddingLeft: '1em'
          }}
        >
          {children}
        </Container>
      </Main>

      <Footer />
    </>
  );
}

const Main = styled.main`
  padding: 2em 0;

  @media (min-width: 769px) {
    padding: 3em 0;
  }
`;
