import { BlogApiComponentMedia } from 'app/api/components/BlogApiComponentMedia';
import { ApiCollectionTypeCategory } from 'app/api/collection-types/category/ApiCollectionTypeCategory';
import { ApiCollectionTypePostContent } from 'app/api/collection-types/post/ApiCollectionTypePostContent';

export interface ApiCollectionTypePost {
  title: string;
  creationDate: string;
  coverImage: BlogApiComponentMedia;
  category: ApiCollectionTypeCategory;
  preview_content: string;
  content: ApiCollectionTypePostContent;
}
