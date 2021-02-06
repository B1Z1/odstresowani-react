import Head from 'next/head';
import BlogLayoutPage from 'shared/layouts/page/BlogLayoutPage';
import { BlogLinkData } from 'shared/ui/item/BlogLinkData';

export default function Home() {
  const items: Array<BlogLinkData> = [
    {
      value: 'Artykuły',
      href: '/#'
    },
    {
      value: 'Recenzje',
      href: '/#'
    }
  ];

  return (
    <BlogLayoutPage navigationLinks={ items }>
      <Head>
        <title>Title</title>
      </Head>
    </BlogLayoutPage>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData
//     }
//   };
// };
