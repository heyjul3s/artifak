import Head from 'next/head';
import { DefaultSeo, NextSeoProps } from 'next-seo';

export type HTMLheadProps = NextSeoProps;

export const HTMLhead: React.FC<HTMLheadProps> = ({
  title = 'A React UI primitives library',
  description,
  canonical,
  additionalMetaTags = []
}) => (
  <>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Biryani:wght@300;400;600;700&family=Poppins:wght@600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
    </Head>

    <DefaultSeo
      title={title}
      titleTemplate={`heyjules - %s`}
      canonical={canonical}
      description={description}
      additionalMetaTags={[
        {
          property: 'viewport',
          content: 'initial-scale=1.0, width=device-width'
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff'
        },
        {
          name: 'msapplication-TileImage',
          content: '/ms-icon-144x144.png'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        },
        ...additionalMetaTags
      ]}
    />
  </>
);