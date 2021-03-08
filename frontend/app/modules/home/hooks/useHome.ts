import { useQuery } from '@apollo/client';
import { HomeQuery } from 'app/modules/home/domain/HomeQuery';
import { HOME_QUERY } from 'app/modules/home/queries/homeQuery';
import { HookHomeData } from 'app/modules/home/domain/HookHomeData';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';
import { convertSeoApiToSeoData } from 'app/utils/seo/convertSeoApiToSeoData';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export function useHome(): HookHomeData {
    const {data: homeData} = useQuery<HomeQuery>(HOME_QUERY);
    const convertedSeo: SEOData = convertSeoApiToSeoData(
        homeData?.homePage?.seo as ApiSEOFragment,
        '',
        'page'
    );

    return {
        seoData: convertedSeo
    };
}
