import {
  PostContent,
  PostCoverImage,
  PostCreator,
} from '@globalx-solutions/modules/post';
import { CardData } from '@globalx-solutions/shared/elements/card';
import { SeoData } from '@globalx-solutions/shared/elements/seo';

export interface HookPostData {
  title: string;
  coverImage: PostCoverImage;
  creationDate: Date;
  content: Array<PostContent>;
  trendingStories: Array<CardData>;
  seo: SeoData;
  creator: PostCreator | null;
}
