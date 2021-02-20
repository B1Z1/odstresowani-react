import { useLazyQuery, useQuery } from '@apollo/client';
import { HomeQuery } from 'app/modules/home/domain/HomeQuery';
import { HOME_QUERY } from 'app/modules/home/queries/homeQuery';
import { POST_PREVIEW_QUERY } from 'app/api/queries/post-preview/postPreviewQuery';
import { ApiPostPreviewQuery } from 'app/api/queries/post-preview/ApiPostPreviewQuery';
import { ApiPostPreviewQueryParams } from 'app/api/queries/post-preview/ApiPostPreviewQueryParams';
import { useEffect } from 'react';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { ApiNavigationItemsQuery, ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { HookHomeData } from 'app/modules/home/domain/HookHomeData';
import { FooterData } from 'app/components/modules/footer/domain/FooterData';
import { convertApiFooterQueryToFooterData } from 'app/utils/converters/footer/convertApiFooterQueryToFooterData';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { convertApiNavigationItemsToCustomLinkData } from 'app/utils/converters/custom-link/convertApiNavigationItemsToCustomLinkData';
import { CardData } from 'app/components/elements/card/CardData';
import { convertApiPostPreviewFragmentToCardData } from 'app/utils/converters/blog-card/convertApiPostPreviewFragmentToCardData';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';

export function useHome(): HookHomeData {
    const {data: homeData} = useQuery<HomeQuery>(HOME_QUERY);
    const {data: footerData} = useQuery<ApiFooterQuery>(FOOTER_QUERY);
    const {data: navigationData} = useQuery<ApiNavigationQuery>(NAVIGATION_QUERY);
    const categoryId: string | null = homeData?.homePage?.category.id || null;
    const [loadHomePostPreviewData, {data: homePostPreviewData}] =
        useLazyQuery<ApiPostPreviewQuery, ApiPostPreviewQueryParams>(POST_PREVIEW_QUERY);
    const convertedFooterData: FooterData | null = !!footerData ? convertApiFooterQueryToFooterData(footerData) : null;
    const convertedNavigationData: Array<CustomLinkData> =
        navigationData?.navigation.items.map((item: ApiNavigationItemsQuery) => {
            return convertApiNavigationItemsToCustomLinkData(item);
        }) || [];
    const convertedCategoriesData: Array<CustomLinkData> =
        homeData?.homePage?.category.categories.map((category) => {
            return {
                href: category.id,
                value: category.name
            };
        }) || [];
    const convertedPreviewPostsData: Array<CardData> = homePostPreviewData?.category?.posts.map((postData: ApiPostPreviewFragment) => {
        return convertApiPostPreviewFragmentToCardData(postData);
    }) || [];


    useEffect(() => {
        loadPostsData(0);
    }, []);

    function loadPostsData(startIndex: number) {
        if (categoryId) {
            loadHomePostPreviewData({
                variables: {
                    categoryId,
                    startIndex
                }
            });
        }
    }

    return {
        categoriesData: convertedCategoriesData,
        previewPostsData: convertedPreviewPostsData,
        footerData: convertedFooterData,
        navigationData: convertedNavigationData,

        loadPostsData
    };
}
