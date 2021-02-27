import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { initializeApollo } from 'app/lib/apollo/apolloClient';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import { POST_PREVIEW_QUERY } from 'app/api/queries/post-preview/postPreviewQuery';
import { ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { CATEGORY_QUERY } from 'app/modules/category/query/categoryQuery';
import { CategoryQuery } from 'app/modules/category/domain/CategoryQuery';
import { useLayout } from 'app/modules/layout/hooks/useLayout';
import LayoutPage from 'app/components/layouts/page/LayoutPage';
import { usePostPreview } from 'app/modules/post-preview/hooks/usePostPreview';
import { useCategory } from 'app/modules/category/hooks/useCategory';
import { LinkList } from 'app/components/elements/link-list/LinkList';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useEffect, useState } from 'react';
import { CardData } from 'app/components/elements/card/CardData';
import { mapWithLast } from 'app/utils/map-with-last/mapWithLast';
import { getPostCardColumn } from 'app/utils/components/post-card/getPostCardColumn';
import { ParsedUrlQuery } from 'querystring';

export default function Category({categoryId}: { categoryId: string }) {
    const {footerData, navigationData} = useLayout();
    const {categoriesData, seoData} = useCategory(categoryId);
    const {loadPostsData, previewPostsData} = usePostPreview(categoryId);
    const [hasMore, setHasMore] = useState<boolean>(false);
    const [postsData, setPostsData] = useState<Array<CardData>>([]);
    const startIndex: number = postsData.length;
    const cardElements: Array<JSX.Element> = mapWithLast<JSX.Element, CardData>(postsData, getPostCardColumn);

    useEffect(() => {
        setPostsData([]);
        setHasMore(true);
    }, [categoryId]);

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
        <LayoutPage seoData={ seoData }
                    navigationItemsData={ navigationData }
                    footerData={ footerData }>
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
    const categoryId: string = context.params?.id as string;
    const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
    const categoryPageQuery = await apolloClient.query<CategoryQuery>({
        query: CATEGORY_QUERY,
        variables: {
            categoryId: categoryId
        }
    });

    if (!!categoryPageQuery.data.category) {
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
            initialApolloState: apolloClient.cache.extract(),
            categoryId
        }
    };
};
