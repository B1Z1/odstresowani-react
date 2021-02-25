import { ApiCollectionTypePost } from 'app/api/collection-types/post/ApiCollectionTypePost';

export interface ApiCollectionTypeCategory {
  name: string;
  posts: Array<ApiCollectionTypePost>;
  categories: Array<ApiCollectionTypeCategory>;
}
