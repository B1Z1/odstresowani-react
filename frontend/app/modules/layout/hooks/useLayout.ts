import { useQuery } from '@apollo/client';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { ApiFooterQueryParams } from 'app/api/queries/footer/ApiFooterQueryParams';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { ApiNavigationQueryParams } from 'app/api/queries/navigation/ApiNavigationQueryParams';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { ApiLocale } from 'app/api/utils/locale/ApiLocale';
import { apiParseLocale } from 'app/api/utils/locale/apiParseLocale';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { FooterData } from 'app/components/modules/footer/domain/FooterData';
import { LayoutQuery } from 'app/modules/layout/domain/LayoutQuery';
import { convertApiNavigationItemsToCustomLinkData } from 'app/utils/converters/custom-link/convertApiNavigationItemsToCustomLinkData';
import { convertApiFooterQueryToFooterData } from 'app/utils/converters/footer/convertApiFooterQueryToFooterData';
import { NextRouter, useRouter } from 'next/router';

export function useLayout(): LayoutQuery {
    const { locale }: NextRouter = useRouter();
    const parsedLocale: ApiLocale = apiParseLocale(locale);
    const { data: footerData } = useQuery<ApiFooterQuery, ApiFooterQueryParams>(
        FOOTER_QUERY,
        {
            variables: {
                locale: parsedLocale
            }
        }
    );
    const { data: navigationData } = useQuery<ApiNavigationQuery, ApiNavigationQueryParams>(
        NAVIGATION_QUERY,
        {
            variables: {
                locale: parsedLocale
            }
        }
    );
    const convertedFooterData: FooterData | null = !!footerData ? convertApiFooterQueryToFooterData(footerData) : null;
    const convertedNavigationData: Array<CustomLinkData> =
        navigationData?.navigation.items.map(convertApiNavigationItemsToCustomLinkData) || [];

    if (!convertedFooterData) {
        console.error('Footer doesn\'t have data');
    }

    return {
        footerData: convertedFooterData,
        navigationData: convertedNavigationData
    };
}
