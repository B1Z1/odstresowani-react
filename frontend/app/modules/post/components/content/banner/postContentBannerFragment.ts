import { gql } from 'graphql-tag';

export const postContentBannerFragmentName = 'postContentBannerFragment';

export const postContentBannerFragment = gql`
    fragment ${ postContentBannerFragmentName } on ComponentPostBanner {
        image {
          alternativeText
          url
        }
    }
`;
