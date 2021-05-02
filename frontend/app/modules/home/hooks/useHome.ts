import { useQuery } from '@apollo/client';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';
import { ApiLocale } from 'app/api/utils/locale/ApiLocale';
import { apiParseLocale } from 'app/api/utils/locale/apiParseLocale';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';
import { HomeQuery } from 'app/modules/home/domain/HomeQuery';
import { HomeQueryParams } from 'app/modules/home/domain/HomeQueryParams';
import { HookHomeData } from 'app/modules/home/domain/HookHomeData';
import { HOME_QUERY } from 'app/modules/home/queries/homeQuery';
import { convertSeoApiToSeoData } from 'app/utils/seo/convertSeoApiToSeoData';
import { NextRouter, useRouter } from 'next/router';

export function useHome(): HookHomeData {
    const { locale }: NextRouter = useRouter();
    const parsedLocale: ApiLocale = apiParseLocale(locale);
    const { data: homeData } = useQuery<HomeQuery, HomeQueryParams>(
        HOME_QUERY,
        {
            variables: {
                locale: parsedLocale
            }
        }
    );

    const convertedSeo: SEOData = convertSeoApiToSeoData(
        homeData?.homePage?.seo as ApiSEOFragment,
        '',
        'page'
    );

    return {
        seoData: convertedSeo
    };
}
