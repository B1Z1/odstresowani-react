import PageLayout from 'shared/ui/layouts/page-layout/PageLayoutComponent';
import { getAllPostIds, getPostData } from 'shared/resources/post';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function Post({
                               postData
                             }: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) {
  return (
    <PageLayout>
      <Head>
        <title>{ postData.title }</title>
      </Head>
      <article>
        <h1>{ postData.title }</h1>
        <div>
        </div>
        <div dangerouslySetInnerHTML={ {__html: postData.contentHtml} }/>
      </article>
    </PageLayout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData
    }
  };
};
