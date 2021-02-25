import { ApiRelatedCategoryFragment } from 'app/api/fragments/related-category/ApiRelatedCategoryFragment';

export interface HomeQuery {
    homePage?: {
        category: {
            id: string;
            categories: Array<ApiRelatedCategoryFragment>;
        }
    }
}
