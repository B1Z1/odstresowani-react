import {ApiNavigationCategoryLinkFragment, ApiNavigationLinkFragment, ApiNavigationTypes} from "@globalx-solutions/api";
import {ApiType} from "@globalx-solutions/util";

export type ApiNavigationItemsQuery =
  (ApiNavigationCategoryLinkFragment & ApiType<ApiNavigationTypes.CATEGORY_LINK>) |
  (ApiNavigationLinkFragment & ApiType<ApiNavigationTypes.LINK>);

export interface ApiNavigationQuery {
  navigation: {
    items: Array<ApiNavigationItemsQuery>;
  }
}
