import { GetServerSideProps } from 'next';
import { initializeApollo } from 'app/lib/apollo/apolloClient';
import { POST_PREVIEW_QUERY } from 'app/api/queries/post-preview/postPreviewQuery';
import { NAVIGATION_QUERY } from 'app/components/modules/navigation/resource/navigationQuery';
import { useEffect, useState } from 'react';
import { CardData } from 'app/components/elements/card/CardData';
import LayoutPage from 'app/components/layouts/page/LayoutPage';
import Head from 'next/head';
import { BlogLinkList } from 'app/components/elements/link-list/BlogLinkList';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CATEGORY_PAGE_QUERY } from 'app/components/modules/category/resource/categoryPageQuery';
import { useQuery } from '@apollo/client';
import { BlogCategoriesPageQueryResponse } from 'app/components/modules/category/domain/BlogCategoriesPageQueryResponse';
import { BlogPostPreviewQueryResponse } from 'app/api/queries/post-preview/domain/BlogPostPreviewQueryResponse';
import { Card } from 'app/components/elements/card/Card';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { BlogApiFragmentHostCategory } from 'app/api/fragments/categories/domain/BlogApiFragmentHostCategory';
import { BlogApiFragmentCategory } from 'app/api/fragments/categories/domain/BlogApiFragmentCategory';
import {
    BlogPostImageFragment,
    BlogPostPreviewFragment
} from 'app/api/fragments/post-preview/domain/BlogPostPreviewFragment';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';

function convertPostResponseToCardData(post: BlogPostPreviewFragment): CardData {
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

function convertCategoriesResponseToBlogLink(hostCategory: BlogApiFragmentHostCategory): Array<CustomLinkData> {
    return hostCategory.categories.map((category: BlogApiFragmentCategory) => {
        return {
            value: category.name,
            href: `/category/${ category.id }`
        };
    });
}

function getPostCardItems(blogCardsData: CardData, index: number): JSX.Element {
    const isEven: boolean = index % 2 == 0;
    const paddingRight: string = isEven ? 'xl:ob-pr-16' : '';

    return (
        <div key={ blogCardsData.id }
             className={ `xl:ob-w-1/2 ${ paddingRight } ob-pb-16` }>
            <Card cardData={ blogCardsData }/>
        </div>
    );
}

export default function Category({categoryId}) {
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [postsData, setPostsData] = useState<Array<CardData>>([]);
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
    const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(postsData, getPostCardItems);
    const categoryLinksData: Array<CustomLinkData> = !!categoryPageData && categoryPageData.category.id ?
        convertCategoriesResponseToBlogLink(categoryPageData.category) :
        [];

    useEffect(() => {
        const newPostsData: Array<CardData> = postPreviewData?.category?.posts.map(
            (post: BlogPostPreviewFragment) => convertPostResponseToCardData(post)
        ) || [];
        setPostsData(newPostsData);
        setHasMore(true);
    }, []);

    useEffect(() => {
        const posts = postPreviewData?.category?.posts || [];
        const isMoreThanZero: boolean = posts.length > 0;
        let nextIndex: number;
        let newPostsData: Array<CardData>;

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
        <LayoutPage>
            <Head>
                <title>Title</title>
            </Head>

            <div className="ob-container ob-relative ob-mx-auto ob-mt-16">
                <div className="xl:ob-w-3/4 ob-mb-24">
                    <p className="ob-mb-4 ob-text-xl xl:ob-text-2xl">
                        Życie daje nam solidnie w kość. Piętrzące się obowiązki i nawał pracy często prowadzi do
                        napiętych stanów
                        różnej maści, innymi słowy - wszystko nas wkurza, stresuje, i drażni każdy możliwy nerw.
                    </p>
                    <h1 className="ob-text-2xl xl:ob-text-3xl">
                        Tylko co zrobić, żeby nie trzeba było skrobać naszych nerwów ze ścian? Krzyczeć? To chyba zbyt
                        odważne.
                        Lepić garnki? Twórcze, ale czy faktycznie pomoże? Zanurzyć się w relaksującej lekturze lub
                        filmie? Hmm,
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
        </LayoutPage>
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
