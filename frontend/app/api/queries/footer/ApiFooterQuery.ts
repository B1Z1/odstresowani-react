import { ApiNavigationLinkFragment } from 'app/api/components/navigation/link/ApiNavigationLinkFragment';
import { ApiNavigationFooterColumn } from 'app/api/components/footer/columns/ApiNavigationFooterColumn';
import { ApiNavigationIconLinkFragment } from 'app/api/components/navigation/icon-link/ApiNavigationIconLinkFragment';

export interface ApiFooterQuery {
    footer: {
        columns: Array<ApiNavigationFooterColumn>;
        bottomNavigation: Array<ApiNavigationLinkFragment>;
        socialMediaNavigation: Array<ApiNavigationIconLinkFragment>;
    }
}
