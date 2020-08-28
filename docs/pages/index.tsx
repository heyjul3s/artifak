import React from 'react';
import { Layout } from '../components/Layout';
import { useRouter } from 'next/router';
import { content } from '../content';

export default function Home() {
  const router = useRouter();
  const [contentType, setContentType] = React.useState<string>('');

  React.useEffect(() => {
    if (!!router.query && !!router.query.content) {
      setContentType(router.query.content as string);
    }
  }, [router.query]);

  const PageContent = content[contentType];
  const Home = content.Introduction;

  return (
    <Layout>
      <>{!!PageContent ? <PageContent /> : <Home />}</>
    </Layout>
  );
}
