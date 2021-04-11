import { useQuery } from '@apollo/client';
import {
  ApiFooterQuery,
  ApiNavigationQuery,
  FOOTER_QUERY,
  NAVIGATION_QUERY,
} from '@globalx-solutions/api';
import { LayoutQuery } from '@globalx-solutions/modules/layout';
import { CustomLinkData } from '@globalx-solutions/shared/elements/link';
import { FooterData } from '@globalx-solutions/shared/modules/footer';
import {
  convertApiFooterQueryToFooterData,
  convertApiNavigationItemsToCustomLinkData,
} from '@globalx-solutions/util';

export function useLayout(): LayoutQuery {
  const { data: footerData } = useQuery<ApiFooterQuery>(FOOTER_QUERY);
  const { data: navigationData } = useQuery<ApiNavigationQuery>(
    NAVIGATION_QUERY
  );
  const convertedFooterData: FooterData | null = !!footerData
    ? convertApiFooterQueryToFooterData(footerData)
    : null;
  const convertedNavigationData: Array<CustomLinkData> =
    navigationData?.navigation.items.map(
      convertApiNavigationItemsToCustomLinkData
    ) || [];

  if (!convertedFooterData) {
    console.error("Footer doesn't have data");
  }

  return {
    footerData: convertedFooterData,
    navigationData: convertedNavigationData,
  };
}
