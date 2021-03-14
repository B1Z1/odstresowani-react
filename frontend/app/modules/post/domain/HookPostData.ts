import { PostCoverImage } from 'app/modules/post/domain/PostCoverImage';
import { PostContent } from 'app/modules/post/infrastructure/components/content/PostContent';
import { CardData } from 'app/components/elements/card/CardData';
import { PostCreator } from 'app/modules/post/domain/PostCreator';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';

export interface HookPostData {
    title: string;
    coverImage: PostCoverImage;
    creationDate: Date;
    content: Array<PostContent>;
    trendingStories: Array<CardData>;
    seo: SEOData;
    creator: PostCreator | null;
}
