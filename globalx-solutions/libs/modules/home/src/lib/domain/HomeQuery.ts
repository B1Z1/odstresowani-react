import {
  ApiRelatedCategoryFragment,
  ApiSEOFragment,
} from '@globalx-solutions/api';

export interface HomeQuery {
  homePage?: {
    category: {
      id: string;
      categories: Array<ApiRelatedCategoryFragment>;
    };
    seo: ApiSEOFragment;
  };
}
