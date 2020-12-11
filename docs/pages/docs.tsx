import React from 'react';
import { FlexRow, FlexCol } from 'artifak';
import { Layout } from '../components/Global/Layout';
import { useRouter } from 'next/router';
import { content } from '../containers';
import { DesktopNav } from '../components/DesktopNav/DesktopNav';

export default function Docs() {
  const router = useRouter();
  const [contentQuery, setContentQuery] = React.useState<string>(
    'getting-started'
  );

  React.useEffect(() => {
    if (!!router.query && !!router.query.content) {
      setContentQuery(router.query.content as string);
    }
  }, [router.query]);

  const PageContent = content[contentQuery];

  return (
    <Layout>
      <FlexRow>
        <FlexCol columnSize={3}>
          <DesktopNav />
        </FlexCol>

        <FlexCol columnSize={9}>
          {!!PageContent && <PageContent />}
          {!PageContent && <p>Page Not Found</p>}
        </FlexCol>
      </FlexRow>
    </Layout>
  );
}
