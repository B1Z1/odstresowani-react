import {ApiCreatorFragment, ApiSEOFragment} from '@globalx-solutions/api';
import {
  PostContent,
  PostCoverImage,
  PostTrendingStory,
} from '@globalx-solutions/modules/post';

export interface PostQuery {
  postBySlug: {
    id: string;
    slug: string;
    cover_image: PostCoverImage;
    title: string;
    creation_date: string;
    content: Array<PostContent>;
    trendingStories: Array<PostTrendingStory>;
    seo: ApiSEOFragment;
    creator?: ApiCreatorFragment;
  };
}
