import { ApiFooterColumnsEmptyFragment } from 'app/api/components/footer/columns/empty/ApiFooterColumnsEmptyFragment';
import { ApiFooterColumnsWithoutTitleFragment } from 'app/api/components/footer/columns/without-title/ApiFooterColumnsWithoutTitleFragment';
import { ApiFooterColumnWithTitleFragment } from 'app/api/components/footer/columns/with-title/ApiFooterColumnWithTitleFragment';
import { ApiNavigationFooterColumnType } from 'app/api/components/footer/columns/ApiNavigationFooterColumnType';
import { ApiType } from 'app/utils/api/type/ApiType';

export type ApiNavigationFooterColumn =
    (ApiFooterColumnsEmptyFragment & ApiType<ApiNavigationFooterColumnType.EMPTY>) |
    (ApiFooterColumnWithTitleFragment & ApiType<ApiNavigationFooterColumnType.WITH_TITLE>) |
    (ApiFooterColumnsWithoutTitleFragment & ApiType<ApiNavigationFooterColumnType.WITHOUT_TITLE>);
