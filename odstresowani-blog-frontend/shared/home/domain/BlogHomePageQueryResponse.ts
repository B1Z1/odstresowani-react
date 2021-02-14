import { BlogApiFragmentHostCategory } from 'shared/api/fragments/categories/domain/BlogApiFragmentHostCategory';

export interface BlogHomePageQueryResponse {
  homePage: {
    category: BlogApiFragmentHostCategory
  }
}
