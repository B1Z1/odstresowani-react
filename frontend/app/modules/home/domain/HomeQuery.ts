import { ApiRelatedCategoryFragment } from 'app/api/fragments/related-category/ApiRelatedCategoryFragment';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export interface HomeQuery {
    homePage?: {
        category: {
            id: string;
            categories: Array<ApiRelatedCategoryFragment>;
        }
        seo: ApiSEOFragment;
    }
}
