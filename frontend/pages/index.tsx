import Head from 'next/head';
import LayoutPage from 'app/components/layouts/page/LayoutPage';
import { BlogLinkList } from 'app/components/elements/link-list/BlogLinkList';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { initializeApollo } from 'app/lib/apollo/apolloClient';
import { CardData } from 'app/components/elements/card/CardData';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card } from 'app/components/elements/card/Card';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { useEffect, useState } from 'react';
import { POST_PREVIEW_QUERY } from 'app/api/queries/post-preview/postPreviewQuery';
import { HOME_QUERY } from 'app/modules/home/queries/homeQuery';
import { HomeQuery } from 'app/modules/home/domain/HomeQuery';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { useHome } from 'app/modules/home/hooks/useHome';

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

export default function Home() {
    const {previewPostsData, footerData, navigationData, categoriesData, loadPostsData} = useHome();
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [postsData, setPostsData] = useState<Array<CardData>>([]);
    const startIndex: number = postsData.length;
    const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(postsData, getPostCardItems);

    useEffect(() => {
        setTimeout(() => setHasMore(false), 5000);
    }, []);

    useEffect(() => {
        const postsDataCount: number = previewPostsData.length;
        const isMoreThanZero: boolean = postsDataCount > 0;

        if (!isMoreThanZero) {
            setHasMore(false);
            return;
        }

        setPostsData([...postsData, ...previewPostsData]);
        setHasMore(true);
    }, [previewPostsData]);

    function fetchData(): void {
        loadPostsData(startIndex);
    }

    return (
        <LayoutPage navigationItemsData={ navigationData }
                    footerData={ footerData }>
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
                              links={ categoriesData }/>

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

export const getServerSideProps: GetServerSideProps = async () => {
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
    const homePageQuery = await apolloClient.query<HomeQuery>({
        query: HOME_QUERY
    });

    if (!!homePageQuery.data.homePage?.category) {
        const categoryId: string = homePageQuery.data.homePage.category.id;

        await apolloClient.query<ApiPostPreviewFragment>({
            query: POST_PREVIEW_QUERY,
            variables: {
                categoryId: categoryId,
                startIndex: 0
            }
        });
    }

    await apolloClient.query<ApiNavigationQuery>({
        query: NAVIGATION_QUERY
    });

    await apolloClient.query<ApiFooterQuery>({
        query: FOOTER_QUERY
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract()
        }
    };
};
