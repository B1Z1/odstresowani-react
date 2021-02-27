import { useQuery } from '@apollo/client';
import { PostQuery } from 'app/modules/post/domain/PostQuery';
import { POST_QUERY } from 'app/modules/post/queries/postQuery';
import { HookPostData } from 'app/modules/post/domain/HookPostData';
import { PostContent } from 'app/modules/post/components/content/PostContent';
import { PostCoverImage } from 'app/modules/post/domain/PostCoverImage';
import { PostCreator } from 'app/modules/post/domain/PostCreator';
import { CardData } from 'app/components/elements/card/CardData';
import { ApiPostPreviewFragment } from 'app/api/fragments/post-preview/ApiPostPreviewFragment';
import { BlogImageData } from 'app/utils/datas/image/BlogImageData';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';
import { convertSeoApiToSeoData } from 'app/utils/seo/convertSeoApiToSeoData';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';

export function usePost(postId: string): HookPostData {
    const {data: postData} = useQuery<PostQuery>(
        POST_QUERY,
        {variables: {postId: postId}}
    );
    const creationDate: Date = new Date(postData?.post.creation_date as string);
    const convertedTrendingStories: Array<CardData> = postData?.post.trendingStories.map(
        (value: { post: ApiPostPreviewFragment }) => {
            const creationPostPreviewDate: Date = new Date(value.post.creation_date);
            const imageData: BlogImageData = {
                title: value.post.cover_image.alternativeText,
                alt: value.post.cover_image.alternativeText,
                src: `/api/${ value.post.cover_image.url }`
            };

            return {
                id: value.post.id,
                title: value.post.title,
                href: `/post/${ value.post.id }`,
                date: creationPostPreviewDate,
                description: value.post.preview_content,
                imageData: imageData
            };
        }) || [];
    const convertedCreator: PostCreator = {
        name: postData?.post.creator.username as string,
        avatarUrl: `/api/${ postData?.post.creator.avatar.url }`,
        description: postData?.post.creator.description as string
    };
    const pageSuffix: string = `/post/${ postId }`;
    const convertedSeo: SEOData = convertSeoApiToSeoData(
        postData?.post.seo as ApiSEOFragment,
        pageSuffix,
        'article'
    );

    return {
        title: postData?.post.title as string,
        content: postData?.post.content as Array<PostContent>,
        coverImage: postData?.post.cover_image as PostCoverImage,
        creator: convertedCreator,
        creationDate: creationDate,
        trendingStories: convertedTrendingStories,
        seo: convertedSeo
    };
}
