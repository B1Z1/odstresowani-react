import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { ApiFooterQueryParams } from 'app/api/queries/footer/ApiFooterQueryParams';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { ApiNavigationQueryParams } from 'app/api/queries/navigation/ApiNavigationQueryParams';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { ApiPostPreviewQueryParams } from 'app/api/queries/post-preview/ApiPostPreviewQueryParams';
import { POST_PREVIEW_QUERY } from 'app/api/queries/post-preview/postPreviewQuery';
import { apiParseLocale } from 'app/api/utils/locale/apiParseLocale';
import { CardData } from 'app/components/elements/card/CardData';
import LayoutPage from 'app/components/layouts/page/LayoutPage';
import { initializeApollo } from 'app/lib/apollo/apolloClient';
import { HomeQuery } from 'app/modules/home/domain/HomeQuery';
import { HomeQueryParams } from 'app/modules/home/domain/HomeQueryParams';
import { useHome } from 'app/modules/home/hooks/useHome';
import { HOME_QUERY } from 'app/modules/home/queries/homeQuery';
import { useLayout } from 'app/modules/layout/hooks/useLayout';
import { usePostPreview } from 'app/modules/post-preview/hooks/usePostPreviewByCategory';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { getPostCardColumn } from 'app/utils/ui/post-card/getPostCardColumn';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { ApiLocale } from 'app/api/utils/locale/ApiLocale';
import { NextRouter, useRouter } from 'next/router';

export default function Home() {
    const { locale }: NextRouter = useRouter();
    const { footerData, navigationData } = useLayout();
    const { seoData } = useHome();
    const { loadPostsData, previewPostsData } = usePostPreview();
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

    useEffect(() => {
        setPostsData([]);
    }, [locale]);

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const parsedLocale: ApiLocale = apiParseLocale(locale);
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();

    await apolloClient.query<HomeQuery, HomeQueryParams>({
        query: HOME_QUERY,
        variables: {
            locale: parsedLocale
        }
    });

    await apolloClient.query<ApiPostPreviewFragment, ApiPostPreviewQueryParams>({
        query: POST_PREVIEW_QUERY,
        variables: {
            startIndex: 0,
            locale: parsedLocale
        }
    });

    await apolloClient.query<ApiNavigationQuery, ApiNavigationQueryParams>({
        query: NAVIGATION_QUERY,
        variables: {
            locale: parsedLocale
        }
    });

    await apolloClient.query<ApiFooterQuery, ApiFooterQueryParams>({
        query: FOOTER_QUERY,
        variables: {
            locale: parsedLocale
        }
    });

    return {
        props: {
            initialApolloState: apolloClient.cache.extract()
        }
    };
};
