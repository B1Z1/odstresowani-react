import { BlogApiFragmentCategory } from 'app/api/fragments/categories/domain/BlogApiFragmentCategory';

export interface BlogApiFragmentHostCategory {
  id: string;
  name: string;
  categories: Array<BlogApiFragmentCategory>
}
