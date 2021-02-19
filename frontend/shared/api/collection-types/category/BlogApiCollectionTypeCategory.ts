import { BlogApiCollectionTypePost } from 'shared/api/collection-types/post/BlogApiCollectionTypePost';

export interface BlogApiCollectionTypeCategory {
  name: string;
  posts: Array<BlogApiCollectionTypePost>;
  categories: Array<BlogApiCollectionTypeCategory>;
}
