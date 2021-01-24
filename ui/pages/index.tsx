import Head from 'next/head';
import PageLayout, { siteTitle } from 'shared/ui/layouts/page-layout/PageLayoutComponent';
import { getSortedPostsData } from 'shared/resources/post';
import { GetStaticProps } from 'next';
import { Flex } from 'shared/styles/ui/flex/FlexComponent';
import { Column } from 'shared/styles/ui/column/ColumnComponent';
import { SpacingSize } from 'shared/styles/ui/spacing/domain/SpacingSize';

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
      <Flex>
        <Column one pt={SpacingSize.TWO}>Hello</Column>
      </Flex>
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};
