import { ApiRelatedCategoryFragment } from 'app/api/fragments/related-category/ApiRelatedCategoryFragment';

export interface CategoryQuery {
    category: {
        id: string;
        name: string;
        categories: Array<ApiRelatedCategoryFragment>;
    }
}
