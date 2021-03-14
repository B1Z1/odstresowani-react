import { PostCoverImage } from 'app/modules/post/domain/PostCoverImage';
import { PostContent } from 'app/modules/post/infrastructure/components/content/PostContent';
import { ApiCreatorFragment } from 'app/api/fragments/creator/ApiCreatorFragment';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';
import { PostTrendingStory } from 'app/modules/post/domain/PostTrendingStory';

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
    }
}
