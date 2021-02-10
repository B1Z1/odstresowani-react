import { gql } from '@apollo/client';

export const blogNavigationFragmentLinkName = 'navigationLink';

export const blogNavigationFragmentLink = gql`
  fragment ${ blogNavigationFragmentLinkName } on ComponentNavigationNavigationLink {
    name
    url
  }
`;
