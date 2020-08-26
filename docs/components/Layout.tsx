import { Container } from './Container';
import { HTMLhead, HTMLheadProps } from './HTMLhead';
import { Header } from './Header';
import { Footer } from './Footer';

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
  return (
    <>
      <HTMLhead
        title={title}
        description={description}
        canonical={canonical}
        additionalMetaTags={additionalMetaTags}
      />

      <Header />

      <Container>
        <main>
          <Container>{children}</Container>
        </main>
      </Container>

      <Footer />
    </>
  );
}
