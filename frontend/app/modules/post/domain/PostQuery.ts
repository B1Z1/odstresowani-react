import { PostCoverImage } from 'app/modules/post/domain/PostCoverImage';
import { PostContent } from 'app/modules/post/components/content/PostContent';
import { ApiCreatorFragment } from 'app/api/fragments/creator/ApiCreatorFragment';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';

export interface PostQuery {
    post: {
        id: string;
        cover_image: PostCoverImage;
        title: string;
        creation_date: string;
        content: Array<PostContent>;
        creator: ApiCreatorFragment;
        trendingStories: Array<ApiPostPreviewFragment>;
    }
}
