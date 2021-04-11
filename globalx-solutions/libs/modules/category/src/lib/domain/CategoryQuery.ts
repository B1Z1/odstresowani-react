import {
  ApiRelatedCategoryFragment,
  ApiSEOFragment,
} from '@globalx-solutions/api';

export interface CategoryQuery {
  categoryBySlug: {
    id: string;
    name: string;
    slug: string;
    categories: Array<ApiRelatedCategoryFragment>;
    seo: ApiSEOFragment;
  };
}
