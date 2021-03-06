import LayoutPage from 'app/components/layouts/page/LayoutPage';
import { LinkList } from 'app/components/elements/link-list/LinkList';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { GetServerSideProps } from 'next';
import { initializeApollo } from 'app/lib/apollo/apolloClient';
import { CardData } from 'app/components/elements/card/CardData';
import InfiniteScroll from 'react-infinite-scroll-component';
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
import { getPostCardColumn } from 'app/utils/ui/post-card/getPostCardColumn';
import { useLayout } from 'app/modules/layout/hooks/useLayout';
import { usePostPreview } from 'app/modules/post-preview/hooks/usePostPreview';

export default function Home() {
    const {footerData, navigationData} = useLayout();
    const {categoriesData, categoryId, seoData} = useHome();
    const {loadPostsData, previewPostsData} = usePostPreview(categoryId);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [postsData, setPostsData] = useState<Array<CardData>>([]);
    const startIndex: number = postsData.length;
    const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(postsData, getPostCardColumn);

    useEffect(() => {
        const postsDataCount: number = previewPostsData.length;
        const isMoreThanZero: boolean = postsDataCount > 0;
        let allPosts: Array<CardData>;

        if (!isMoreThanZero) {
            setHasMore(false);
            return;
        }

        allPosts = previewPostsData.filter((postData: CardData) => {
            return !postsData.find((originalPostsData: CardData) => originalPostsData.id === postData.id);
        });

        setPostsData([...postsData, ...allPosts]);
        setHasMore(true);
    }, [previewPostsData]);

    function fetchData(): void {
        loadPostsData(startIndex);
    }

    return (
        <LayoutPage seoData={ seoData }
                    navigationItemsData={ navigationData }
                    footerData={ footerData }>

            <div className="ob-container ob-relative ob-mx-auto ob-mt-16">
                <div className="xl:ob-w-3/4 ob-mb-24">
                    <p className="ob-mb-4 ob-text-xl xl:ob-text-2xl">
                        Psychoedukacja i specjalistyczna wiedza są ważne dla dobrostanu psychicznego i
                        zrównoważonego funkcjonowania. O zdrowie i odpowiednią higienę psychiczną można zadbać w
                        gabinecie u psychoterapeuty. My jednak dbamy, aby każdy miał dostęp do najnowszej wiedzy i
                        nowinek z dziedziny zdrowia psychicznego, które, mamy nadzieję, będą dla wielu wsparciem w
                        zachowaniu równowagi w codziennym życiu.
                    </p>
                    <h1 className="ob-text-2xl xl:ob-text-3xl">
                        Nasi specjaliści szukają najświeższych informacji
                        na temat odżywiania, regulacji emocji, tworzenia satysfakcjonujących związków, mindfulness,
                        dbania o siebie i o otaczający nas świat. Znajdziecie u nas także wywiady, sprawdzone porady,
                        odpowiedzi na trudne pytania i mnóstwo pozytywnej energii, która zmotywuje Was do działania.
                    </h1>
                </div>

                <LinkList className="ob-mb-12"
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
