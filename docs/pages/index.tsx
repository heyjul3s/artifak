import React from 'react';
import { FlexRow, FlexCol } from 'artifak';
import { Layout } from '../components/Global/Layout';
import { useRouter } from 'next/router';
import { content } from '../containers';
import { HomePage } from './HomePage/HomePage';
import { DesktopNav } from '../components/Nav/Desktop/DesktopNav';

export default function Home() {
  const router = useRouter();
  const [contentType, setContentType] = React.useState<string>('');

  React.useEffect(() => {
    if (!!router.query && !!router.query.content) {
      setContentType(router.query.content as string);
    }
  }, [router.query]);

  const PageContent = content[contentType];

  return (
    <Layout>
      <>
        <HomePage />

        {!!PageContent && (
          <FlexRow>
            <FlexCol columnSize={3}>
              <DesktopNav />
            </FlexCol>

            <FlexCol columnSize={9}>
              <PageContent />
            </FlexCol>
          </FlexRow>
        )}
      </>
    </Layout>
  );
}
