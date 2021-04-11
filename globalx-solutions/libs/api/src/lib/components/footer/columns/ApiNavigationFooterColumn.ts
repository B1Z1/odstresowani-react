import {ApiType} from "@globalx-solutions/util";
import {
  ApiFooterColumnsEmptyFragment, ApiFooterColumnsWithoutTitleFragment,
  ApiFooterColumnWithTitleFragment,
  ApiNavigationFooterColumnType
} from '@globalx-solutions/api';

export type ApiNavigationFooterColumn =
  (ApiFooterColumnsEmptyFragment & ApiType<ApiNavigationFooterColumnType.EMPTY>) |
  (ApiFooterColumnWithTitleFragment & ApiType<ApiNavigationFooterColumnType.WITH_TITLE>) |
  (ApiFooterColumnsWithoutTitleFragment & ApiType<ApiNavigationFooterColumnType.WITHOUT_TITLE>);
