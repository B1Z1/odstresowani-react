import { gql } from 'graphql-tag';
import { postPreviewFragment, postPreviewFragmentName } from 'app/api/fragments/post-preview/postPreviewFragment';
import { creatorFragment, creatorFragmentName } from 'app/api/fragments/creator/creatorFragment';
import {
    postContentBannerFragment,
    postContentBannerFragmentName
} from 'app/modules/post/infrastructure/components/content/banner/postContentBannerFragment';
import {
    postContentTextFragment,
    postContentTextFragmentName
} from 'app/modules/post/infrastructure/components/content/text/postContentTextFragment';
import { seoFragment, seoFragmentName } from 'app/api/components/seo/seoFragment';

export const POST_QUERY = gql`
    query postQuery($locale: String, $postSlug: String) {
      postBySlug(locale: $locale, slug: $postSlug) {
        id
        slug
        cover_image {
          alternativeText
          url
        }
        title
        creation_date
        content {
          ... on ComponentPostBanner {
            ...${ postContentBannerFragmentName }
          }
    
          ... on ComponentPostText {
            ...${ postContentTextFragmentName }
          }
    
          __typename
        }
        
        creator {
            ...${ creatorFragmentName }
        }
    
        trendingStories {
          post {
            ...${ postPreviewFragmentName }
          }
        }
        
        seo {
            ...${ seoFragmentName }
        }
      }
    }
    
    ${ seoFragment }
    ${ creatorFragment }
    ${ postContentBannerFragment }
    ${ postContentTextFragment }
    ${ postPreviewFragment }
`;
