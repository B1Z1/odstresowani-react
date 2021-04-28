import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import {
  ApiFooterQuery,
  ApiNavigationQuery,
  ApiPostPreviewFragment,
  FOOTER_QUERY,
  NAVIGATION_QUERY,
  POST_PREVIEW_BY_CATEGORY_QUERY,
} from '@globalx-solutions/api';
import { initializeApollo } from '@globalx-solutions/modules/apollo-initializer';
import {
  CATEGORY_QUERY,
  CategoryQuery,
  useCategory,
} from '@globalx-solutions/modules/category';
import { useLayout } from '@globalx-solutions/modules/layout';
import { usePostPreviewByCategory } from '@globalx-solutions/modules/post-preview-by-category';
import { CardData } from '@globalx-solutions/shared/elements/card';
import { LinkList } from '@globalx-solutions/shared/elements/link-list';
import { PageLayout } from '@globalx-solutions/shared/layouts/page';
import { getPostCardColumn, mapWithLast } from '@globalx-solutions/util';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Category({ categorySlug }: { categorySlug: string }) {
  const { footerData, navigationData } = useLayout();
  const { categoryId, categoriesData, seoData } = useCategory(categorySlug);
  const { loadPostsData, previewPostsData } = usePostPreviewByCategory(
    categoryId
  );
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [postsData, setPostsData] = useState<Array<CardData>>([]);
  const startIndex: number = postsData.length;
  const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(
    postsData,
    getPostCardColumn
  );

  useEffect(() => {
    setPostsData([]);
    setHasMore(true);
  }, [categorySlug]);

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

        <LinkList
          className="ob-mb-12"
          title="Kategorie"
          links={categoriesData}
        />

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

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const categorySlug: string = context.params?.slug as string;
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  const categoryPageQuery = await apolloClient.query<CategoryQuery>({
    query: CATEGORY_QUERY,
    variables: {
      categorySlug: categorySlug,
    },
  });

  if (categoryPageQuery.data.categoryBySlug) {
    await apolloClient.query<ApiPostPreviewFragment>({
      query: POST_PREVIEW_BY_CATEGORY_QUERY,
      variables: {
        categoryId: categoryPageQuery.data.categoryBySlug.id,
        startIndex: 0,
      },
    });
  }

  await apolloClient.query<ApiNavigationQuery>({
    query: NAVIGATION_QUERY,
  });

  await apolloClient.query<ApiFooterQuery>({
    query: FOOTER_QUERY,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      categorySlug: categorySlug,
    },
  };
};
