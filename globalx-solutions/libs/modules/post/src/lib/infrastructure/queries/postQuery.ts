import { gql } from '@apollo/client';
import {
  creatorFragment,
  creatorFragmentName,
  postPreviewFragment,
  postPreviewFragmentName,
  seoFragment,
  seoFragmentName,
} from '@globalx-solutions/api';
import {
  postContentBannerFragment,
  postContentBannerFragmentName,
  postContentTextFragment,
  postContentTextFragmentName,
} from '@globalx-solutions/modules/post';

export const POST_QUERY = gql`
    query postQuery($postSlug: String) {
      postBySlug(slug: $postSlug) {
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
            ...${postContentBannerFragmentName}
          }

          ... on ComponentPostText {
            ...${postContentTextFragmentName}
          }

          __typename
        }

        creator {
            ...${creatorFragmentName}
        }

        trendingStories {
          post {
            ...${postPreviewFragmentName}
          }
        }

        seo {
            ...${seoFragmentName}
        }
      }
    }

    ${seoFragment}
    ${creatorFragment}
    ${postContentBannerFragment}
    ${postContentTextFragment}
    ${postPreviewFragment}
`;
