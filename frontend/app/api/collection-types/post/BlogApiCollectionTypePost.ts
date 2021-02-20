import { BlogApiComponentMedia } from 'app/api/components/BlogApiComponentMedia';
import { ApiCollectionTypeCategory } from 'app/api/collection-types/category/ApiCollectionTypeCategory';
import { BlogApiCollectionTypePostContent } from 'app/api/collection-types/post/BlogApiCollectionTypePostContent';

export interface BlogApiCollectionTypePost {
  title: string;
  creationDate: string;
  coverImage: BlogApiComponentMedia;
  category: ApiCollectionTypeCategory;
  preview_content: string;
  content: BlogApiCollectionTypePostContent;
}
