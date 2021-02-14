import { gql } from '@apollo/client';
import {
  blogNavigationFragmentCategory,
  blogNavigationFragmentCategoryName
} from 'shared/navigation/resource/fragments/blogNavigationFragmentCategory';
import {
  blogNavigationFragmentLink,
  blogNavigationFragmentLinkName
} from 'shared/navigation/resource/fragments/blogNavigationFragmentLink';
import {
  blogNavigationFragmentSocialMedia,
  blogNavigationFragmentSocialMediaName
} from 'shared/navigation/resource/fragments/blogNavigationFragmentSocialMedia';

export const FOOTER_QUERY = gql`
  query footerQuery {
    footer {
      leftSideNavigation {
        ... on ComponentNavigationNavigationCategory {
          ...${ blogNavigationFragmentCategoryName }
        }

        ... on ComponentNavigationNavigationLink {
          ...${ blogNavigationFragmentLinkName }
        }
      }

      middleSideNavigation {
        ... on ComponentNavigationNavigationCategory {
          ...${ blogNavigationFragmentCategoryName }
        }

        ... on ComponentNavigationNavigationLink {
          ...${ blogNavigationFragmentLinkName }
        }
      }

      rightSideNavigation {
        ... on ComponentNavigationNavigationCategory {
          ...${ blogNavigationFragmentCategoryName }
        }

        ... on ComponentNavigationNavigationLink {
          ...${ blogNavigationFragmentLinkName }
        }
      }

      socialMediaNavigation {
        ...${ blogNavigationFragmentSocialMediaName }
      }

      bottomSideNavigation {
        ... on ComponentNavigationNavigationCategory {
          ...${ blogNavigationFragmentCategoryName }
        }

        ... on ComponentNavigationNavigationLink {
          ...${ blogNavigationFragmentLinkName }
        }
      }
    }
  }

  ${ blogNavigationFragmentCategory }
  ${ blogNavigationFragmentLink }
  ${ blogNavigationFragmentSocialMedia }
`;
