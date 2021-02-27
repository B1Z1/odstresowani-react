import { ApiRelatedCategoryFragment } from 'app/api/fragments/related-category/ApiRelatedCategoryFragment';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export interface CategoryQuery {
    category: {
        id: string;
        name: string;
        categories: Array<ApiRelatedCategoryFragment>;
        seo: ApiSEOFragment;
    }
}
