import {ApiType} from "@globalx-solutions/util";
import {
  ApiNavigationCategoryLinkFragment,
  ApiNavigationIconLinkFragment,
  ApiNavigationLinkFragment, ApiNavigationTypes
} from "@globalx-solutions/api";

export type ApiNavigationType =
  (ApiNavigationLinkFragment & ApiType<ApiNavigationTypes.LINK>) |
  (ApiNavigationIconLinkFragment & ApiType<ApiNavigationTypes.ICON_LINK>) |
  (ApiNavigationCategoryLinkFragment & ApiType<ApiNavigationTypes.CATEGORY_LINK>);
