import { useQuery } from '@apollo/client';
import { PostQuery } from 'app/modules/post/domain/PostQuery';
import { POST_QUERY } from 'app/modules/post/queries/postQuery';
import { HookPostData } from 'app/modules/post/domain/HookPostData';
import { PostContent } from 'app/modules/post/components/content/PostContent';
import { PostCoverImage } from 'app/modules/post/domain/PostCoverImage';
import { PostCreator } from 'app/modules/post/domain/PostCreator';
import { CardData } from 'app/components/elements/card/CardData';
import { SEOData } from 'app/components/elements/seo/domain/SEOData';
import { convertSeoApiToSeoData } from 'app/utils/seo/convertSeoApiToSeoData';
import { ApiSEOFragment } from 'app/api/components/seo/ApiSEOFragment';
import { convertTrendingStoriesToCardData } from 'app/modules/post/utils/convertTrendingStoriesToCardData';
import { convertQueryCreatorToPostCreator } from 'app/modules/post/utils/convertQueryCreatorToPostCreator';

export function usePost(postSlug: string): HookPostData {
    const {data: postData} = useQuery<PostQuery>(
        POST_QUERY,
        {variables: {postSlug: postSlug}}
    );

    const creationDate: Date = new Date(postData?.postBySlug.creation_date as string);
    const convertedTrendingStories: Array<CardData> = !!postData ?
        convertTrendingStoriesToCardData(postData.postBySlug.trendingStories)
        : [];
    const convertedCreator: PostCreator | null = postData?.postBySlug?.creator ?
        convertQueryCreatorToPostCreator(postData?.postBySlug?.creator) :
        null;
    const pageSuffix: string = `/post/${ postSlug }`;
    const convertedSeo: SEOData = convertSeoApiToSeoData(
        postData?.postBySlug.seo as ApiSEOFragment,
        pageSuffix,
        'article'
    );

    return {
        title: postData?.postBySlug.title as string,
        content: postData?.postBySlug.content as Array<PostContent>,
        coverImage: postData?.postBySlug.cover_image as PostCoverImage,
        creator: convertedCreator,
        creationDate: creationDate,
        trendingStories: convertedTrendingStories,
        seo: convertedSeo
    };
}
