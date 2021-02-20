import { ApiNavigationCategoryLinkFragment } from 'app/api/components/navigation/category/ApiNavigationCategoryLinkFragment';
import { ApiType } from 'app/api/utils/api-type/ApiType';
import { ApiNavigationTypes } from 'app/api/components/navigation/ApiNavigationTypes';
import { ApiNavigationLinkFragment } from 'app/api/components/navigation/link/ApiNavigationLinkFragment';

export type ApiNavigationItemsQuery = (ApiNavigationCategoryLinkFragment & ApiType<ApiNavigationTypes.CATEGORY_LINK>) |
    (ApiNavigationLinkFragment & ApiType<ApiNavigationTypes.LINK>);

export interface ApiNavigationQuery {
    navigation: {
        items: Array<ApiNavigationItemsQuery>;
    }
}
