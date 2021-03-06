import { ApiRelatedCategoryFragment } from 'app/api/fragments/related-category/ApiRelatedCategoryFragment';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export interface CategoryQuery {
    categoryBySlug: {
        id: string;
        name: string;
        slug: string;
        categories: Array<ApiRelatedCategoryFragment>;
        seo: ApiSEOFragment;
    }
}
