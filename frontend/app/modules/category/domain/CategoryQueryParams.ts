import { ApiLocaleParams } from 'app/api/utils/locale/ApiLocaleParams';

export interface CategoryQueryParams extends ApiLocaleParams {
    categorySlug: string;
}