import { gql } from '@apollo/client';
import {
  blogNavigationFragmentCategory,
  blogNavigationFragmentCategoryName
} from 'shared/navigation/resource/fragments/blogNavigationFragmentCategory';
import {
  blogNavigationFragmentLink,
  blogNavigationFragmentLinkName
} from 'shared/navigation/resource/fragments/blogNavigationFragmentLink';

export const NAVIGATION_QUERY = gql`
  query navigationQuery {
    navigation {
      items {
        ... on ComponentNavigationNavigationCategory {
          ...${ blogNavigationFragmentCategoryName }
        }

        ... on ComponentNavigationNavigationLink {
          ...${ blogNavigationFragmentLinkName }
        }

        __typename
      }
    }
  }

  ${ blogNavigationFragmentCategory }
  ${ blogNavigationFragmentLink }
`;
