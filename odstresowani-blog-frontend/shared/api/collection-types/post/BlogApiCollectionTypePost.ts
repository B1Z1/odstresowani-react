import { BlogApiComponentMedia } from 'shared/api/components/BlogApiComponentMedia';
import { BlogApiCollectionTypeCategory } from 'shared/api/collection-types/category/BlogApiCollectionTypeCategory';
import { BlogApiCollectionTypePostContent } from 'shared/api/collection-types/post/BlogApiCollectionTypePostContent';

export interface BlogApiCollectionTypePost {
  title: string;
  creationDate: string;
  coverImage: BlogApiComponentMedia;
  category: BlogApiCollectionTypeCategory;
  preview_content: string;
  content: BlogApiCollectionTypePostContent;
}
