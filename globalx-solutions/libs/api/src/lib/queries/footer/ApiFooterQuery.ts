import {
  ApiNavigationFooterColumn,
  ApiNavigationIconLinkFragment,
  ApiNavigationLinkFragment
} from "@globalx-solutions/api";

export interface ApiFooterQuery {
    footer: {
        columns: Array<ApiNavigationFooterColumn>;
        bottomNavigation: Array<ApiNavigationLinkFragment>;
        socialMediaNavigation: Array<ApiNavigationIconLinkFragment>;
    }
}
