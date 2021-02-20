import { BlogApiCollectionTypePost } from 'app/api/collection-types/post/BlogApiCollectionTypePost';

export interface ApiCollectionTypeCategory {
  name: string;
  posts: Array<BlogApiCollectionTypePost>;
  categories: Array<ApiCollectionTypeCategory>;
}
