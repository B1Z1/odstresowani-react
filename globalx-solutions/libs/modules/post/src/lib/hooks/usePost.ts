import { useQuery } from '@apollo/client';
import { ApiSEOFragment } from '@globalx-solutions/api';
import {
  convertQueryCreatorToPostCreator,
  convertTrendingStoriesToCardData,
  HookPostData,
  POST_QUERY,
  PostContent,
  PostCoverImage,
  PostCreator,
  PostQuery,
} from '@globalx-solutions/modules/post';
import { CardData } from '@globalx-solutions/shared/elements/card';
import { SeoData } from '@globalx-solutions/shared/elements/seo';
import { convertSeoApiToSeoData } from '@globalx-solutions/util';

export function usePost(postSlug: string): HookPostData {
  const { data: postData } = useQuery<PostQuery>(POST_QUERY, {
    variables: { postSlug: postSlug },
  });

  const creationDate: Date = new Date(
    postData?.postBySlug.creation_date as string
  );
  const convertedTrendingStories: Array<CardData> = postData
    ? convertTrendingStoriesToCardData(postData.postBySlug.trendingStories)
    : [];
  const convertedCreator: PostCreator | null = postData?.postBySlug?.creator
    ? convertQueryCreatorToPostCreator(postData?.postBySlug?.creator)
    : null;
  const pageSuffix = `/post/${postSlug}`;
  const convertedSeo: SeoData = convertSeoApiToSeoData(
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
    seo: convertedSeo,
  };
}
