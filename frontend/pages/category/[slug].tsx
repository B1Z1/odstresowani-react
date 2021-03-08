import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from 'app/lib/apollo/apolloClient';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import { POST_PREVIEW_BY_CATEGORY_QUERY } from 'app/api/queries/post-preview-by-category/postPreviewByCategoryQuery';
import { ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { CATEGORY_QUERY } from 'app/modules/category/query/categoryQuery';
import { CategoryQuery } from 'app/modules/category/domain/CategoryQuery';
import { useLayout } from 'app/modules/layout/hooks/useLayout';
import LayoutPage from 'app/components/layouts/page/LayoutPage';
import { usePostPreviewByCategory } from 'app/modules/post-preview-by-category/hooks/usePostPreviewByCategory';
import { useCategory } from 'app/modules/category/hooks/useCategory';
import { LinkList } from 'app/components/elements/link-list/LinkList';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { CardData } from 'app/components/elements/card/CardData';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { getPostCardColumn } from 'app/utils/ui/post-card/getPostCardColumn';
import { ParsedUrlQuery } from 'querystring';

export default function Category({categorySlug}: { categorySlug: string }) {
    const {footerData, navigationData} = useLayout();
    const {categoryId, categoriesData, seoData} = useCategory(categorySlug);
    const {loadPostsData, previewPostsData} = usePostPreviewByCategory(categoryId);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [postsData, setPostsData] = useState<Array<CardData>>([]);
    const startIndex: number = postsData.length;
    const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(postsData, getPostCardColumn);

    useEffect(() => {
        setPostsData([]);
        setHasMore(true);
    }, [categorySlug]);

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

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext<ParsedUrlQuery>) => {
    const categorySlug: string = context.params?.slug as string;
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
    const categoryPageQuery = await apolloClient.query<CategoryQuery>({
        query: CATEGORY_QUERY,
        variables: {
            categorySlug: categorySlug
        }
    });

    if (!!categoryPageQuery.data.categoryBySlug) {
        await apolloClient.query<ApiPostPreviewFragment>({
            query: POST_PREVIEW_BY_CATEGORY_QUERY,
            variables: {
                categoryId: categoryPageQuery.data.categoryBySlug.id,
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
            initialApolloState: apolloClient.cache.extract(),
            categorySlug: categorySlug
        }
    };
};
