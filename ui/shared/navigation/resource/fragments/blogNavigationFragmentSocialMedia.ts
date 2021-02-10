import { gql } from '@apollo/client';

export const blogNavigationFragmentSocialMediaName = 'navigationSocialMedia';

export const blogNavigationFragmentSocialMedia = gql`
  fragment ${ blogNavigationFragmentSocialMediaName } on ComponentNavigationNavigationIconLink {
    iconName
    title
    url
  }
`;
