import { GetServerSideProps } from 'next';
import { initializeApollo } from 'lib/apollo/apolloClient';
import { POST_PREVIEW_QUERY } from 'shared/api/queries/post-preview/postPreviewQuery';
import { NAVIGATION_QUERY } from 'shared/navigation/resource/navigationQuery';
import { FOOTER_QUERY } from 'shared/navigation/ui/footer/resource/footerQuery';
import { useEffect, useState } from 'react';
import { BlogCardData } from 'shared/ui/card/BlogCardData';
import BlogLayoutPage from 'shared/layouts/page/BlogLayoutPage';
import Head from 'next/head';
import { BlogLinkList } from 'shared/ui/link-list/BlogLinkList';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CATEGORY_PAGE_QUERY } from 'shared/category/resource/categoryPageQuery';
import { useQuery } from '@apollo/client';
import { BlogCategoriesPageQueryResponse } from 'shared/category/domain/BlogCategoriesPageQueryResponse';
import { BlogPostPreviewQueryResponse } from 'shared/api/queries/post-preview/domain/BlogPostPreviewQueryResponse';
import { BlogCard } from 'shared/ui/card/BlogCard';
import { mapWithLast } from 'shared/utils/map-with-last/mapWithLast';
import { BlogLinkData } from 'shared/ui/link/BlogLinkData';
import { BlogApiFragmentHostCategory } from 'shared/api/fragments/categories/domain/BlogApiFragmentHostCategory';
import { BlogApiFragmentCategory } from 'shared/api/fragments/categories/domain/BlogApiFragmentCategory';
import {
  BlogPostImageFragment,
  BlogPostPreviewFragment
} from 'shared/api/fragments/post-preview/domain/BlogPostPreviewFragment';

function convertPostResponseToCardData(post: BlogPostPreviewFragment): BlogCardData {
  const date: Date = new Date(post.creation_date);
  const imageData: BlogPostImageFragment = post.cover_image;

  return {
    id: post.id,
    date,
    title: post.title,
    description: post.preview_content,
    href: `/post/${ post.id }`,
    imageData: {
      title: imageData.name,
      alt: imageData.alternativeText,
      src: `http://localhost:1337${ imageData.url }`
    }
  };
}

function convertCategoriesResponseToBlogLink(hostCategory: BlogApiFragmentHostCategory): Array<BlogLinkData> {
  return hostCategory.categories.map((category: BlogApiFragmentCategory) => {
    return {
      value: category.name,
      href: `/category/${ category.id }`
    };
  });
}

function getPostCardItems(blogCardsData: BlogCardData, index: number): JSX.Element {
  const isEven: boolean = index % 2 == 0;
  const paddingRight: string = isEven ? 'xl:ob-pr-16' : '';

  return (
    <div key={ blogCardsData.id }
         className={ `xl:ob-w-1/2 ${ paddingRight } ob-pb-16` }>
      <BlogCard cardData={ blogCardsData }/>
    </div>
  );
}

export default function Category({categoryId}) {
  const [hasMore, setHasMore] = useState<boolean>(false);
  const [postsData, setPostsData] = useState<Array<BlogCardData>>([]);
  const [startIndex, setStartIndex] = useState<number>(0);
  const {data: categoryPageData} = useQuery<BlogCategoriesPageQueryResponse>(CATEGORY_PAGE_QUERY, {
    variables: {
      categoryId: categoryId
    }
  });
  const {
    data: postPreviewData,
    refetch: refetchPostPreview
  } = useQuery<BlogPostPreviewQueryResponse>(POST_PREVIEW_QUERY, {
    variables: {
      categoryId,
      startIndex: 0
    }
  });
  const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, BlogCardData>(postsData, getPostCardItems);
  const categoryLinksData: Array<BlogLinkData> = !!categoryPageData && categoryPageData.category.id ?
    convertCategoriesResponseToBlogLink(categoryPageData.category) :
    [];

  useEffect(() => {
    const newPostsData: Array<BlogCardData> = postPreviewData?.category?.posts.map(
      (post: BlogPostPreviewFragment) => convertPostResponseToCardData(post)
    ) || [];
    setPostsData(newPostsData);
    setHasMore(true);
  }, []);

  useEffect(() => {
    const posts = postPreviewData?.category?.posts || [];
    const isMoreThanZero: boolean = posts.length > 0;
    let nextIndex: number;
    let newPostsData: Array<BlogCardData>;

    if (!isMoreThanZero) {
      setHasMore(false);
      return;
    }

    nextIndex = startIndex + posts.length;
    setStartIndex(nextIndex);

    newPostsData = posts.map((post: BlogPostPreviewFragment) => convertPostResponseToCardData(post));
    setPostsData([...postsData, ...newPostsData]);
  }, [postPreviewData]);

  function fetchData(): void {
    refetchPostPreview({
      categoryId,
      startIndex: startIndex
    });
  }

  return (
    <BlogLayoutPage>
      <Head>
        <title>Title</title>
      </Head>

      <div className="ob-container ob-relative ob-mx-auto ob-mt-16">
        <div className="xl:ob-w-3/4 ob-mb-24">
          <p className="ob-mb-4 ob-text-xl xl:ob-text-2xl">
            Życie daje nam solidnie w kość. Piętrzące się obowiązki i nawał pracy często prowadzi do napiętych stanów
            różnej maści, innymi słowy - wszystko nas wkurza, stresuje, i drażni każdy możliwy nerw.
          </p>
          <h1 className="ob-text-2xl xl:ob-text-3xl">
            Tylko co zrobić, żeby nie trzeba było skrobać naszych nerwów ze ścian? Krzyczeć? To chyba zbyt odważne.
            Lepić garnki? Twórcze, ale czy faktycznie pomoże? Zanurzyć się w relaksującej lekturze lub filmie? Hmm,
            ciekawe. Biorę.
          </h1>
        </div>

        <BlogLinkList className="ob-mb-12"
                      title="Kategorie"
                      links={ categoryLinksData }/>

        <InfiniteScroll className="ob-flex ob-flex-wrap"
                        dataLength={ cardElements.length }
                        next={ fetchData }
                        hasMore={ hasMore }
                        loader={ <span>Loading</span> }>
          { cardElements }
        </InfiniteScroll>
      </div>
    </BlogLayoutPage>
  );
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const apolloClient = initializeApollo();
  // @ts-ignore
  const categoryId: string = params.id;
  const startIndex: number = 0;

  await apolloClient.query({
    query: CATEGORY_PAGE_QUERY,
    variables: {
      categoryId: categoryId
    }
  });

  await apolloClient.query({
    query: POST_PREVIEW_QUERY,
    variables: {
      categoryId: categoryId,
      startIndex: startIndex
    }
  });

  await apolloClient.query({
    query: NAVIGATION_QUERY
  });

  await apolloClient.query({
    query: FOOTER_QUERY
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      categoryId: categoryId
    }
  };
};
