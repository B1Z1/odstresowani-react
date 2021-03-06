import { useQuery } from '@apollo/client';
import { HomeQuery } from 'app/modules/home/domain/HomeQuery';
import { HOME_QUERY } from 'app/modules/home/queries/homeQuery';
import { HookHomeData } from 'app/modules/home/domain/HookHomeData';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';
import { convertSeoApiToSeoData } from 'app/utils/seo/convertSeoApiToSeoData';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export function useHome(): HookHomeData {
    const {data: homeData} = useQuery<HomeQuery>(HOME_QUERY);
    const categoryId: string | null = homeData?.homePage?.category.id || null;
    const convertedCategoriesData: Array<CustomLinkData> =
        homeData?.homePage?.category.categories.map((category) => {
            return {
                href: `/category/${ category.slug }`,
                value: category.name,
                target: '_self'
            };
        }) || [];
    const convertedSeo: SEOData = convertSeoApiToSeoData(
        homeData?.homePage?.seo as ApiSEOFragment,
        '',
        'page'
    );

    return {
        categoryId,
        categoriesData: convertedCategoriesData,
        seoData: convertedSeo
    };
}
