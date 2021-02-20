import { ApiType } from 'app/api/utils/api-type/ApiType';
import { ApiNavigationLinkFragment } from 'app/api/components/navigation/link/ApiNavigationLinkFragment';
import { ApiNavigationTypes } from 'app/api/components/navigation/ApiNavigationTypes';
import { ApiNavigationIconLinkFragment } from 'app/api/components/navigation/icon-link/ApiNavigationIconLinkFragment';
import { ApiNavigationCategoryLinkFragment } from 'app/api/components/navigation/category/ApiNavigationCategoryLinkFragment';

export type ApiNavigationType =
    (ApiNavigationLinkFragment & ApiType<ApiNavigationTypes.LINK>) |
    (ApiNavigationIconLinkFragment & ApiType<ApiNavigationTypes.ICON_LINK>) |
    (ApiNavigationCategoryLinkFragment & ApiType<ApiNavigationTypes.CATEGORY_LINK>);
