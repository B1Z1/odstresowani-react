import { gql } from '@apollo/client';

export const postContentBannerFragmentName = 'postContentBannerFragment';

export const postContentBannerFragment = gql`
    fragment ${postContentBannerFragmentName} on ComponentPostBanner {
        image {
          alternativeText
          url
        }
    }
`;
