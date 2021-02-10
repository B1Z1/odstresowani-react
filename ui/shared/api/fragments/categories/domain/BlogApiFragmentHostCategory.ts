import { BlogApiFragmentCategory } from 'shared/api/fragments/categories/domain/BlogApiFragmentCategory';

export interface BlogApiFragmentHostCategory {
  id: string;
  name: string;
  categories: Array<BlogApiFragmentCategory>
}
