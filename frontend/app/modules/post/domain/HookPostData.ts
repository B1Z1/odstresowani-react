import { PostCoverImage } from 'app/modules/post/domain/PostCoverImage';
import { PostContent } from 'app/modules/post/components/content/PostContent';
import { CardData } from 'app/components/elements/card/CardData';
import { PostCreator } from 'app/modules/post/domain/PostCreator';

export interface HookPostData {
    title: string;
    coverImage: PostCoverImage;
    creationDate: Date;
    content: Array<PostContent>;
    creator: PostCreator;
    trendingStories: Array<CardData>;
}
