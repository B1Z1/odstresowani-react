import { useQuery } from '@apollo/client';
import { ApiFooterQuery } from 'app/api/queries/footer/ApiFooterQuery';
import { FOOTER_QUERY } from 'app/api/queries/footer/footerQuery';
import { ApiNavigationItemsQuery, ApiNavigationQuery } from 'app/api/queries/navigation/ApiNavigationQuery';
import { NAVIGATION_QUERY } from 'app/api/queries/navigation/navigationQuery';
import { FooterData } from 'app/components/modules/footer/domain/FooterData';
import { convertApiFooterQueryToFooterData } from 'app/utils/converters/footer/convertApiFooterQueryToFooterData';
import { CustomLinkData } from 'app/components/elements/link/CustomLinkData';
import { convertApiNavigationItemsToCustomLinkData } from 'app/utils/converters/custom-link/convertApiNavigationItemsToCustomLinkData';
import { LayoutQuery } from 'app/modules/layout/domain/LayoutQuery';

export function useLayout(): LayoutQuery {
    const {data: footerData} = useQuery<ApiFooterQuery>(FOOTER_QUERY);
    const {data: navigationData} = useQuery<ApiNavigationQuery>(NAVIGATION_QUERY);
    const convertedFooterData: FooterData | null = !!footerData ? convertApiFooterQueryToFooterData(footerData) : null;
    const convertedNavigationData: Array<CustomLinkData> =
        navigationData?.navigation.items.map((item: ApiNavigationItemsQuery) => {
            return convertApiNavigationItemsToCustomLinkData(item);
        }) || [];

    if (!convertedFooterData) {
        console.error('Footer doesn\'t have data');
    }

    return {
        footerData: convertedFooterData,
        navigationData: convertedNavigationData
    };
}
