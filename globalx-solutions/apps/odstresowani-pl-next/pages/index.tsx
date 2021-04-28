import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import {
  ApiFooterQuery,
  ApiNavigationQuery,
  ApiPostPreviewFragment,
  FOOTER_QUERY,
  NAVIGATION_QUERY,
  POST_PREVIEW_QUERY,
} from '@globalx-solutions/api';
import { initializeApollo } from '@globalx-solutions/modules/apollo-initializer';
import {
  HOME_QUERY,
  HomeQuery,
  useHome,
} from '@globalx-solutions/modules/home';
import { useLayout } from '@globalx-solutions/modules/layout';
import { usePostPreview } from '@globalx-solutions/modules/post-preview';
import { CardData } from '@globalx-solutions/shared/elements/card';
import { PageLayout } from '@globalx-solutions/shared/layouts/page';
import { getPostCardColumn, mapWithLast } from '@globalx-solutions/util';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Home() {
  const { footerData, navigationData } = useLayout();
  const { seoData } = useHome();
  const { loadPostsData, previewPostsData } = usePostPreview();
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [postsData, setPostsData] = useState<Array<CardData>>([]);
  const startIndex: number = postsData.length;
  const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(
    postsData,
    getPostCardColumn
  );

  useEffect(() => {
    const postsDataCount: number = previewPostsData.length;
    const isMoreThanZero: boolean = postsDataCount > 0;

    if (!isMoreThanZero) {
      setHasMore(false);
      return;
    }

    const allPosts: Array<CardData> = previewPostsData.filter(
      (postData: CardData) => {
        return !postsData.find(
          (originalPostsData: CardData) => originalPostsData.id === postData.id
        );
      }
    );

    setPostsData([...postsData, ...allPosts]);
    setHasMore(true);
  }, [previewPostsData]);

  function fetchData(): void {
    loadPostsData(startIndex);
  }

  return (
    <PageLayout
      seoData={seoData}
      navigationItemsData={navigationData}
      footerData={footerData}
    >
      <div className="ob-container ob-relative ob-mx-auto ob-mt-16">
        <div className="xl:ob-w-3/4 ob-mb-24">
          <p className="ob-mb-4 ob-text-xl xl:ob-text-2xl">
            Psychoedukacja i specjalistyczna wiedza są ważne dla dobrostanu
            psychicznego i zrównoważonego funkcjonowania. O zdrowie i
            odpowiednią higienę psychiczną można zadbać w gabinecie u
            psychoterapeuty. My jednak dbamy, aby każdy miał dostęp do
            najnowszej wiedzy i nowinek z dziedziny zdrowia psychicznego, które,
            mamy nadzieję, będą dla wielu wsparciem w zachowaniu równowagi w
            codziennym życiu.
          </p>
          <h1 className="ob-text-2xl xl:ob-text-3xl">
            Nasi specjaliści szukają najświeższych informacji na temat
            odżywiania, regulacji emocji, tworzenia satysfakcjonujących
            związków, mindfulness, dbania o siebie i o otaczający nas świat.
            Znajdziecie u nas także wywiady, sprawdzone porady, odpowiedzi na
            trudne pytania i mnóstwo pozytywnej energii, która zmotywuje Was do
            działania.
          </h1>
        </div>

        <InfiniteScroll
          className="ob-flex ob-flex-wrap"
          dataLength={cardElements.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<span>Loading</span>}
        >
          {cardElements}
        </InfiniteScroll>
      </div>
    </PageLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  await apolloClient.query<HomeQuery>({
    query: HOME_QUERY,
  });

  await apolloClient.query<ApiPostPreviewFragment>({
    query: POST_PREVIEW_QUERY,
    variables: {
      startIndex: 0,
    },
  });

  await apolloClient.query<ApiNavigationQuery>({
    query: NAVIGATION_QUERY,
  });

  await apolloClient.query<ApiFooterQuery>({
    query: FOOTER_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
};
