import React from 'react';
import { FlexRow, FlexCol } from 'artifak';
import { Layout } from '../components/Global/Layout';
import { useRouter } from 'next/router';
import { content } from '../page-content';
import { DesktopNav } from '../components/Nav/Desktop/DesktopNav';
import { MobileNav } from '../components/Nav/Mobile/MobileNav';
import { useMatchMedia } from '../hooks';

export default function Docs() {
  const router = useRouter();
  const matchedMobile = useMatchMedia('(hover: none)');
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
      <>
        {matchedMobile && <MobileNav />}

        <FlexRow>
          {!matchedMobile && (
            <FlexCol columnSize={[12, 12, 12, 3]}>
              <DesktopNav />
            </FlexCol>
          )}

          <FlexCol columnSize={matchedMobile ? 12 : [12, 12, 12, 9]}>
            {!!PageContent && <PageContent />}
            {!PageContent && <p>Page Not Found</p>}
          </FlexCol>
        </FlexRow>
      </>
    </Layout>
  );
}
